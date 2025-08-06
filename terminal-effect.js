// Terminal Typewriter Effect
document.addEventListener('DOMContentLoaded', function() {
    const terminalContent = document.querySelector('.terminal-content');
    
    // Terminal lines to be typed out
    const terminalLines = [
        '> <span class="terminal-highlight">Welcome to my digital workspace!</span>',
        '> <span class="terminal-name">Hamdil Hasan</span> <span class="terminal-role">| Developer | Explorer | Dreamer</span>',
        '> <span class="terminal-cyan">Building seamless experiences</span> and <span class="terminal-green">future-proofing my skills</span>.',
        '> <span class="terminal-yellow">Tech enthusiast</span> | Python, Java, C/C++, HTML/CSS, Git/GitHub',
        '> <span class="terminal-purple">Driven by curiosity, collaboration, and a passion for creation.</span>',
        '> <span class="terminal-quote">"Let\'s turn ideas into code and code into impact."</span>',
        '> <span class="terminal-cyan"> </span>'
    ];
    
    let lineIndex = 0;
    let charIndex = 0;
    let currentLine = '';
    let isDeleting = false;
    const typeSpeed = 50; // milliseconds per character
    const deleteSpeed = 30;
    const pauseBetweenLines = 800;
    const pauseBeforeDelete = 2000;
    
    // Clear existing content
    terminalContent.innerHTML = '';
    
    // Add animated glow to terminal card
    const terminalCard = document.querySelector('.terminal-card');
    terminalCard.classList.add('animated-glow');
    
    function createCursor() {
        return '<span class="terminal-cursor">_</span>';
    }
    
    function typeWriter() {
        if (lineIndex < terminalLines.length) {
            const fullLine = terminalLines[lineIndex];
            
            if (!isDeleting && charIndex <= fullLine.length) {
                // Typing forward
                currentLine = fullLine.slice(0, charIndex);
                charIndex++;
                
                // Update content with current progress
                updateTerminalDisplay();
                
                if (charIndex > fullLine.length) {
                    // Line complete, pause then move to next
                    setTimeout(() => {
                        lineIndex++;
                        charIndex = 0;
                        if (lineIndex < terminalLines.length) {
                            typeWriter();
                        } else {
                            // All lines complete, show final state with cursor
                            updateTerminalDisplay(true);
                        }
                    }, pauseBetweenLines);
                } else {
                    setTimeout(typeWriter, typeSpeed);
                }
            }
        }
    }
    
    function updateTerminalDisplay(showFinalCursor = false) {
        let displayContent = '';
        
        // Add completed lines
        for (let i = 0; i < lineIndex; i++) {
            displayContent += `<span class="terminal-line">${terminalLines[i]}</span>`;
        }
        
        // Add current line being typed
        if (lineIndex < terminalLines.length) {
            displayContent += `<span class="terminal-line">${currentLine}${createCursor()}</span>`;
        } else if (showFinalCursor) {
            // Show final cursor on last line
            displayContent += `<span class="terminal-line">${createCursor()}</span>`;
        }
        
        terminalContent.innerHTML = displayContent;
    }
    
    // Start the typewriter effect after a short delay
    setTimeout(() => {
        typeWriter();
    }, 500);
});