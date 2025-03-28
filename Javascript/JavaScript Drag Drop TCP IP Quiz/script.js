const draggables = document.querySelectorAll('.draggable');
const dropTargets = document.querySelectorAll('.drop-target');
var draggableDiv;

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', e=> {
        e.dataTransfer.setData('text/plain', draggable.getAttribute('data-correct'));
        draggableDiv = draggable;
    })
})

dropTargets.forEach(dropTarget => {
    dropTarget.addEventListener('dragover', e => {
        e.preventDefault();
    })

    dropTarget.addEventListener('drop', e => {
        e.preventDefault();
        const correctAnswer = e.dataTransfer.getData('text/plain');
        const dropTargetAnswer = dropTarget.getAttribute('data-correct');

        draggableDiv.removeChild(draggableDiv.childNodes[1]);
        draggableDiv.classList.add('after-drop');

        draggableDiv.setAttribute('draggable', false);
        e.target.setAttribute('draggable', false);

        if(correctAnswer === dropTargetAnswer){
            dropTarget.classList.add('correct');
        }
        else{
            dropTarget.classList.add('wrong')
        }
    })
})