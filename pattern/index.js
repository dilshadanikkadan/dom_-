const pattern_container = document.querySelector('.container');
const svg = document.querySelector('#line-container')
console.log(svg);

let line = null;
let startX = 0, startY = 0;
let isDrawing = false;
pattern_container.addEventListener('mousedown',(e)=>{
    if (e.target.tagName === 'SPAN') {
        const rect = svg.getBoundingClientRect();
        startX = e.clientX - rect.left;
        startY = e.clientY - rect.top;

        line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", startX);
        line.setAttribute("y1", startY);
        line.setAttribute("x2", startX);
        line.setAttribute("y2", startY);
        line.setAttribute("stroke", "black");
        line.setAttribute("stroke-width", "2");
        svg.appendChild(line);

        isDrawing = true;
    }
})


pattern_container.addEventListener('mousemove', (e) => {
    if (isDrawing) {
        const rect = svg.getBoundingClientRect();
          const endX = e.clientX - rect.left;
        const endY = e.clientY - rect.top;

        line.setAttribute("x2", endX);
        line.setAttribute("y2", endY);
    }
});

pattern_container.addEventListener('mouseup', () => {
    if (isDrawing) {
        isDrawing = false;
    }
});