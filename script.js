const carouselPanels = [
    {
        title: "scanr",
        description: "This is the first feature of our application. User types a disease/disorder of interest. App produces a simple summary of the disease/disorder.",
        imageSrc: "scanr.png",
    },
    {
        title: "compass",
        description: "This feature allows users to get recommendations for where to go for treatment based on the severity of their situation. User presents with some symptoms. Compass asks questions to understand severity of situation. Compass provides a recommendation for where to go.",
        imageSrc: "compass.png",
    },
    {
        title: "medX",
        description: "A great tool for users to look up a medication. User types a medication of interest. App produces a simple summary of the medication and its side effects.",
        imageSrc: "medX.png",
    },
    {
        title: "simplemed",
        description: "Users enters some hyper-complex text. App produces a simplified version of the same text with retained meaning.",
        imageSrc: "simplemed.png",
    },
];

let carouselIndex = 0;

function handleButtonClick(index) {
    carouselIndex = index;
    const carouselContent = document.getElementById("carouselContent");
    const panel = carouselPanels[index];
    carouselContent.innerHTML = `
        <div class="carousel-panel active">
            <h3>${panel.title}</h3>
            <p>${panel.description}</p>
            <img src="${panel.imageSrc}" alt="${panel.title}" />
        </div>
    `;
}

function handlePrev(){
    const prevIndex = carouselIndex;
    const setCarouselIndex = (prevIndex - 1 + 4) % 4; // 4 panels total
    handleButtonClick(setCarouselIndex);
}

function handleNext(){
    const prevIndex = carouselIndex;
    const setCarouselIndex = (prevIndex + 1) % 4;
    handleButtonClick(setCarouselIndex);
}

// Initialize the carousel content
handleButtonClick(0);

