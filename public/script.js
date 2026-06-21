console.log("script loaded");

async function uploadFile() {

    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];

    if (!file) {
        alert("Select a file first");
        return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {

        const response = await fetch("/upload", {
            method: "POST",
            body: formData
        });

        const text = await response.text();

        console.log("Server Response:");
        console.log(text);

        loadGraph();

        loadStats();

        loadTimeline();

    } catch(err) {
        console.error(err);
    }
}
const searchBox =
document.getElementById("searchBox");

searchBox.addEventListener(
    "input",
    searchDocuments
);

async function searchDocuments(){

    const query =
    searchBox.value;

    const response =
    await fetch(
        "/search?q=" + query
    );

    const data =
    await response.json();

    let html = "";

    for(let i=0;i<data.length;i++){

        html += `
<div class="result-item">

<h3>📄 ${data[i].filename}</h3>

<p>
${data[i].content.substring(0,150)}...
</p>

</div>
`;
    }

    document.getElementById(
        "results"
    ).innerHTML = html;
}
searchBox.addEventListener(
    "input",
    fetchSuggestions
);

async function fetchSuggestions(){

    const query = searchBox.value;

    const response =
    await fetch(
        "/suggest?q=" + query
    );

    const suggestions =
    await response.json();

    let html = "";

    suggestions.forEach(item => {

        html += `
<div
class="suggestion-item"
onclick="selectSuggestion('${item}')">

${item}

</div>
`;
    });

    document.getElementById(
        "suggestions"
    ).innerHTML = html;
}

function selectSuggestion(value){

    searchBox.value = value;

    searchDocuments();

    document.getElementById(
        "suggestions"
    ).innerHTML = "";
}

loadGraph();

async function loadGraph(){

    const response =
    await fetch("/graph");

    const data =
    await response.json();

    const container =
    document.getElementById("graph");

    const graphData = {

        nodes:
        new vis.DataSet(data.nodes),

        edges:
        new vis.DataSet(data.edges)
    };

    const options = {

    nodes: {
        shape: "dot",
        scaling: {
            min: 10,
            max: 40
        }
    },

    physics: {
        stabilization: true,
        barnesHut: {
            gravitationalConstant: -4000
        }
    }
};

   if(window.network){
    window.network.destroy();
}

window.network = new vis.Network(
    container,
    graphData,
    options
);
}

loadStats();

async function loadStats(){

    const response =
    await fetch("/stats");

    const data =
    await response.json();

    document.getElementById(
        "docCount"
    ).innerText =
    data.totalDocuments;

    document.getElementById(
        "pdfCount"
    ).innerText =
    data.totalPDFs;

    document.getElementById(
        "imageCount"
    ).innerText =
    data.totalImages;
}

loadTimeline();

async function loadTimeline(){

    const response =
    await fetch("/timeline");

    const data =
    await response.json();

    let html = "";

    data.forEach(item => {

        const date =
        new Date(item.uploadDate)
        .toLocaleDateString();

        html += `
        <div class="timeline-item">

            <h4>${item.filename}</h4>

            <p>${date}</p>

        </div>
        `;
    });

    document.getElementById(
        "timeline"
    ).innerHTML = html;
}

const dropZone =
document.getElementById("dropZone");

dropZone.addEventListener(
    "dragover",
    e => {

        e.preventDefault();
    }
);

dropZone.addEventListener(
    "drop",
    async e => {

        e.preventDefault();

        const file =
        e.dataTransfer.files[0];

        uploadDroppedFile(file);
    }
);

async function uploadDroppedFile(file){

    const formData =
    new FormData();

    formData.append("file", file);

    await fetch("/upload",{
        method:"POST",
        body:formData
    });

    loadStats();
    loadGraph();
    loadTimeline();
}

async function loadReplay(){

    const response =
    await fetch("/replay");

    const data =
    await response.json();

    let html = `
    <h2>Learning Journey</h2>
    `;

    data.forEach(item => {

        const date =
        new Date(item.uploadDate)
        .toLocaleDateString();

        html += `
        <div class="replay-item">

            <h4>📄 ${item.filename}</h4>

<p>
${item.content.substring(0,100)}...
</p>

<small>${date}</small>

        </div>
        `;
    });

    document.getElementById(
        "replayContainer"
    ).innerHTML = html;
}