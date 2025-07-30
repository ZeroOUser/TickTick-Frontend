'use strict';
class PlaybackWrapper extends HTMLElement {
    connectedCallback() {
        const playbackContent = [
            {
                heading: "Efficient Calendar Views",
                img: "assets/images/calendar.jpg",
                advs: [
                    "Monthly View gives a clear overall layout.",
                    "Weekly View clarifies busy and free intervals.",
                    "Agenda View ensures tasks are executed in order.",
                    "Multi-Day View enables dynamic adjustments.",
                    "Multi-Week View lets you shift weeks for changes."
                ]
            },
            {
                heading: "Clear Grouping Kanban View",
                img: "assets/images/kanban.jpg",
                advs: [
                    "Multiple grouping and sorting options.",
                    "Easily drag and drop tasks to adjust.",
                    "Clear member divisions for efficient teamwork."
                ]
            },
            {
                heading: "Timeline View for Projects",
                img: "assets/images/timeline.jpg",
                advs: [
                    "Project timelines make durations easy to identify.",
                    "Drag-and-drop allows for task time adjustments.",
                    "Daily, weekly, and monthly intervals provide flexibility."
                ]
            },
            {
                heading: "Eisenhower Matrix",
                img: "assets/images/matrix.jpg",
                advs: [
                    "Focus on important and urgent tasks.",
                    "Different strategies for different matrix.",
                    "Edit filters to create a customized perspective.",
                    "Effective plans guide the sequence of actions."
                ]
            },
            {
                heading: "Desktop Sticky Notes",
                img: "assets/images/note.jpg",
                advs: [
                    "Pin it to your desktop, never miss out again.",
                    "One-click to neatly organize sticky notes.",
                    "Shortcut keys enable instant capturing of ideas.",
                    "Various colors, select as you like."
                ]
            }
        ];

        const tabItems = document.querySelectorAll(" .playback .slider-item");

        const renderContent = (index) => {
            this.innerHTML = `
                <img src="${playbackContent[index].img}" alt="" loading="lazy">
                <div class="text">
                    <h3 class="title">${playbackContent[index].heading}</h3>
                    <ul class="advs">
                        ${playbackContent[index].advs.map(item => `<li>${item}</li>`).join("")}
                    </ul>
                </div>
            `;
        };

        renderContent(0);

        for (let i = 0; i < tabItems.length; i++) {
            tabItems[i].addEventListener("click", () => {
                renderContent(i);
                tabItems.forEach((item) => {
                    item.classList.remove("active-highlight")
                });
                tabItems[i].classList.add("active-highlight");
            });
        }
    }
}

customElements.define('playback-wrapper', PlaybackWrapper);