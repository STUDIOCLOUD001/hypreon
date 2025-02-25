        //location-glitch
        const text = document.querySelector('.glitch-text');
        text.innerHTML = text.textContent.split('').map(char =>
            `<span style="animation-delay: ${Math.random() * 2}s">${char}</span>`
        ).join('');

        function applyGlitch() {
            const container = document.querySelector('.glitch-container');
            container.style.transform = `translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px)`;
            setTimeout(() => {
                container.style.transform = 'translate(0, 10)';
            }, 50);
        }

        setInterval(applyGlitch, 3000);


        //semantic-glitch
        const words = ["HYPE", "HYPER", "PRE", "HYPREON", "ON", "EON", "HY"];
        const fragments = document.querySelectorAll('.fragmented-text span');

        function getRandomClipPath() {
            const top = Math.floor(Math.random() * 10);   // Random top inset (0-10%)
            const right = Math.floor(Math.random() * 20); // Random right inset (0-20%)
            const bottom = Math.floor(Math.random() * 20);// Random bottom inset (0-20%)
            const left = Math.floor(Math.random() * 10);  // Random left inset (0-10%)

            return `inset(${top}% ${right}% ${bottom}% ${left}%)`;
        }

        function glitchEffect() {
            fragments.forEach((fragment, index) => {
                setTimeout(() => {
                    const randomWord = words[Math.floor(Math.random() * words.length)];
                    if (Math.random() > 0.2) {
                        fragment.textContent = randomWord;
                    }

                    fragment.style.opacity = 0;
                    setTimeout(() => {
                        fragment.style.opacity = 1;
                    }, Math.random() * 1000);

                    fragment.style.clipPath = getRandomClipPath();
                }, Math.random() * 500);
            });

            const randomDelay = Math.floor(Math.random() * (3000 - 500 + 1)) + 500;
            setTimeout(glitchEffect, randomDelay);
        }

        glitchEffect();

    //footer
    function getTime() {
      let wildTime = new Date();
      let formattedTime = wildTime.toLocaleString();

      let glitchText = formattedTime;

      let glitchEffect = Math.random() > 0.5;
      if (glitchEffect) {
        glitchText = formattedTime.split('').reverse().join('');
      }

      const timeMessage = `
        ${glitchText} /initiate
      `;

      document.getElementById("dynamic-text").innerHTML = timeMessage;

      setInterval(() => {
        let alteredTime = new Date().toLocaleString();
        let glitchInterval = Math.random() > 0.5;
        let newGlitchText = alteredTime;

        if (glitchInterval) {
          newGlitchText = alteredTime.split('').sort(() => Math.random() - 0.5).join('');
        }

        document.getElementById("dynamic-text").innerHTML = `
          ${newGlitchText}
        `;
      }, 1500);
    }
    getTime();
