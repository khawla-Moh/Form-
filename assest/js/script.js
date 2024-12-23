const form = document.getElementById('multi-step-form');
        const steps = Array.from(form.getElementsByClassName('form-step'));
        const nextBtn = document.getElementById('next-btn');
        const prevBtn = document.getElementById('prev-btn');
        const progressSteps = Array.from(document.getElementsByClassName('progress-step'));
        const stepTitle = document.getElementById('step-title');
        let currentStep = 0;

        const titles = ['خطوات إنشاء بيانات الجامعة', 'خطوات إنشاء بيانات الجامعة', 'خطوات إنشاء بيانات الجامعة', 'الشروط والأحكام', 'التأكيد'];

        function showStep(stepIndex) {
            steps.forEach((step, index) => {
                step.classList.toggle('active', index === stepIndex);
            });
            progressSteps.forEach((step, index) => {
                step.classList.toggle('active', index <= stepIndex);
            });
            stepTitle.textContent = titles[stepIndex];
            /* nextBtn.textContent = stepIndex === steps.length - 1 ? '✓' : '←'; */
            nextBtn.innerHTML = stepIndex === steps.length - 1 ? '<i class="fa-solid fa-check" style="color:#763626;"></i>' : '<i class="fa-solid fa-angle-left " style="color:#763626;"></i>'; // Use innerHTML for Font Awesome icon 
            prevBtn.style.visibility = stepIndex === 0 ? 'hidden' : 'visible';
        }

        nextBtn.addEventListener('click', () => {
            if (currentStep < steps.length - 1) {
                currentStep++;
                showStep(currentStep);
            } else {
                alert('تم إرسال النموذج بنجاح!');
            }
        });

       
        prevBtn.addEventListener('click', () => {
            if (currentStep > 0) {
                currentStep--;
                showStep(currentStep);
            }
        });
        showStep(currentStep);

//MULTIPLE ANME
const inputField = document.querySelector('.input-field');
const addButton = document.querySelector('.add-button');
const tagsContainer = document.querySelector('.tags-container');
const counter = document.querySelector('.counter');
let tags = [];

function updateCounter() {
    counter.textContent = tags.length > 0 ? `${tags.length} كليات مضافة` : '';
}

function createTag(text) {
    const tag = document.createElement('div');
    tag.className = 'tag';
    tag.innerHTML = `
        <span>${text}</span>
        <button onclick="removeTag('${text}')">&times;</button>
    `;
    return tag;
}

function addTag() {
    const text = inputField.value.trim();
    if (text && !tags.includes(text)) {
        tags.push(text);
        tagsContainer.appendChild(createTag(text));
        inputField.value = '';
        updateCounter();
    }
}

function removeTag(text) {
    const index = tags.indexOf(text);
    if (index > -1) {
        tags.splice(index, 1);
        renderTags();
        updateCounter();
    }
}

function renderTags() {
    tagsContainer.innerHTML = '';
    tags.forEach(tag => {
        tagsContainer.appendChild(createTag(tag));
    });
}

addButton.addEventListener('click', addTag);

inputField.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        addTag();
    }
});        