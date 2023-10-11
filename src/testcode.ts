
export const scrollToSection = (sectionId: string) => {
    const targetElement = document.querySelector(sectionId);
    if (targetElement instanceof HTMLElement) {
        targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }
};

export const moving = (test: string, t: string) => {
    if (test !== '/') {
        window.location.href = '/';
        scrollToSection(t);
    } else {
        scrollToSection(t);
    }
};
