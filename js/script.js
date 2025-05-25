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
    // Fetch Weather and Location
    function fetchWeatherAndLocation() {
        fetch("https://wttr.in/?format=%t")
            .then(response => response.text())
            .then(temp => {
                const celsius = parseInt(temp);
                const fahrenheit = (celsius * 9/5 + 32).toFixed(1);

                fetch("https://ipapi.co/json/")
                    .then(response => response.json())
                    .then(data => {
                        const country = data.country_code;
                        const region = data.region;
                        const useFahrenheit = ["US", "BS", "BZ", "KY", "PW"].includes(country);

                        const temperatureText = useFahrenheit ? `${fahrenheit}°F` : `${celsius}°C`;
                        const locationText = `${region}, ${country}`;

                        applyGlitchEffect(temperatureText, locationText);
                    })
                    .catch(error => console.error("Location fetch error:", error));
            })
            .catch(error => console.error("Weather fetch error:", error));
    }

    // Apply Glitch Effect to Time, Location, and Temperature
    // Temperature Info fetched via wttr.in + location via ipapi.co
    // Fetch Weather and Location
    function fetchWeatherAndLocation() {
        fetch("https://wttr.in/?format=%t")
            .then(response => response.text())
            .then(temp => {
                const celsius = parseInt(temp);
                const fahrenheit = (celsius * 9/5 + 32).toFixed(1);

                fetch("https://ipapi.co/json/")
                    .then(response => response.json())
                    .then(data => {
                        const country = data.country_code;
                        const region = data.region;
                        const useFahrenheit = ["US", "BS", "BZ", "KY", "PW"].includes(country);

                        const temperatureText = useFahrenheit ? `${fahrenheit}°F` : `${celsius}°C`;
                        const locationText = `${region}, ${country}`;

                        applyGlitchEffect(temperatureText, locationText);
                    })
                    .catch(error => console.error("Location fetch error:", error));
            })
            .catch(error => console.error("Weather fetch error:", error));
    }

    // Subtle Glitch Effect
    function glitchText(text) {
        const glitchMap = {
            'o': '0', 'O': '0', 'i': '1', 'I': '1', 'e': '3', 'E': '3', 's': '5', 'S': '5',
            '8': '∞', '3': 'Ʒ', '2': 'ƻ', '5': '𝟝' // Special number distortions
        };

        return text.split("").map((char, index) => {
            if (Math.random() > 0.85) return glitchMap[char] || char; // Soft character swap
            if (Math.random() > 0.9) return char + char; // Minor duplication
            if (Math.random() > 0.8) return char.toUpperCase(); // Occasional uppercase
            if (Math.random() > 0.7) return " " + char; // Small space distortion
            return char;
        }).join("");
    }

    // Update Glitched Text
    function updateGlitchedText(temp, location) {
        const wildTime = new Date().toLocaleString();
        const glitchTime = glitchText(wildTime);
        const glitchTemp = glitchText(temp);
        const glitchLocation = glitchText(location);

        document.getElementById("dynamic-text").innerHTML = `${glitchTime} ${glitchTemp} ${glitchLocation}© Hypreon`;
    }

    // Apply Glitch Effect and Refresh Every 1.5s
    function applyGlitchEffect(temp, location) {
        updateGlitchedText(temp, location);
        setInterval(() => updateGlitchedText(temp, location), 1500);
    }

    // Initialize
    fetchWeatherAndLocation();





    // Fullscreen toggle functionality
    const fullscreenBtn = document.getElementById("fullscreenBtn");
    fullscreenBtn.addEventListener("click", toggleFullScreen);

    function toggleFullScreen() {
    	if (!document.fullscreenElement) {
    		document.documentElement.requestFullscreen();
    	} else {
    		if (document.exitFullscreen) {
    			document.exitFullscreen();
    		}
    	}
    }






    const btn = document.querySelector(".btn");
    const park_sec = document.querySelectorAll(".park_sec");
    const parkSec1 = document.querySelector(".park_sec1");
    const parkSec2 = document.querySelector(".park_sec2");
    const parkSec3 = document.querySelector(".park_sec3");
    const menu = document.querySelector(".menu");
    let overlay;

    let sendFlag = 0;
    //let isMenuVisible = false;
    //const mainCategory = document.querySelector(".main-category");
    //const submenu = document.querySelector(".submenu");
    //const submenuLevel3 = document.querySelector(".submenu-level3");
    //let activeLevel2 = null;
    //let selectedItem = null;

    // Function to toggle Level 2 menu
    function toggleMenu(forceClose = null) {
        if (forceClose === true) {
            isMenuVisible = false;
        } else {
            isMenuVisible = !isMenuVisible;
        }

        mainCategory.classList.toggle("active", isMenuVisible);
        submenu.classList.toggle("active", isMenuVisible);

        if (!isMenuVisible) {
            submenuLevel3.classList.remove("active");
            activeLevel2 = null;
            selectedItem = null;
        }

        if (isMenuVisible) {
            createMenuItems(submenuItems["HRC"], submenu, 160, openLevel3Menu, categoryDescriptions);
        }
    }

    // Function to create overlay
    function createOverlay() {
        if (!overlay) {
            overlay = document.createElement("div");
            overlay.classList.add("radial-menu-overlay");

            // Set the background using inline SVG
            const svgBackground = `
            <svg style="position: absolute; width: 100%; height: 100%; z-index: 0;" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="dottedGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="rgba(255,255,255, 0.22)" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dottedGrid)" />
            </svg>
            `;

            const encodedSVG = encodeURIComponent(svgBackground)
                .replace(/'/g, "%27")
                .replace(/"/g, "%22");

            overlay.style.backgroundImage = `url("data:image/svg+xml,${encodedSVG}")`;
            overlay.style.backgroundSize = "cover";
            overlay.style.backgroundPosition = "center";

            document.body.appendChild(overlay);

            overlay.addEventListener("click", () => {
                menu.classList.remove("active");
                parkSec1.classList.remove("centered");
                toggleMenu(true);
                removeFadeEffect();
                overlay.remove();
                overlay = null;
            });
        }
    }

    // Remove fade effect from sec2 & sec3
    function removeFadeEffect() {
        parkSec2.classList.remove("faded");
        parkSec3.classList.remove("faded");
    }

    // Function to toggle "Featured Collections" button
    function toggleFeaturedCollections(forceClose = null) {
        if (forceClose === true) {
            sendFlag = 0;
            btn.classList.remove("active");
            btn.textContent = "Featured Collections";
            park_sec.forEach(item => item.classList.remove("active"));
        } else {
            sendFlag = 1;
            btn.classList.add("active");
            btn.textContent = "Close Collections";
            park_sec.forEach(item => item.classList.add("active"));
        }
    }

    // "Featured Collections" button functionality
    btn.addEventListener("click", function () {
        this.classList.toggle("active");

        if (sendFlag === 0) {
            toggleFeaturedCollections();
        } else {
            toggleFeaturedCollections(true);

            // Reset everything when button is clicked
            parkSec1.classList.remove("centered");
            menu.classList.remove("active");
            toggleMenu(true); // Close Level 2 menu
            removeFadeEffect(); // Make sure sec2 & sec3 are visible

            // Remove overlay if it exists
            if (overlay) {
                overlay.remove();
                overlay = null;
            }
        }
    });

    // Click event for .park_sec1
    parkSec1.addEventListener("click", () => {
        menu.classList.toggle("active");
        parkSec1.classList.toggle("centered");

        // If "Featured Collections" is NOT active, activate it
        if (sendFlag === 0) {
            toggleFeaturedCollections();
        }

        if (menu.classList.contains("active")) {
            createOverlay();
            overlay.classList.add("active");
            toggleMenu(false); // Ensure submenu opens

            // Apply fade effect to sec2 & sec3
            parkSec2.classList.add("faded");
            parkSec3.classList.add("faded");
        } else {
            if (overlay) {
                overlay.remove();
                overlay = null;
            }
            toggleMenu(true); // Ensure submenu closes

            // Remove fade effect when closing
            removeFadeEffect();
        }
    });








    // Menu data with scientific categories
    const submenuItems = {
      "HRC": ["FOS", "MIN", "MET", "GEO", "BIO", "ARC", "MTO", "CRY", "EXP"]
    };

    // Category descriptions
    const categoryDescriptions = {
      "FOS": "Fossilized",
      "MIN": "Mineralogical",
      "MET": "Metal. comp.",
      "GEO": "Lithological",
      "BIO": "Ex. biomass",
      "ARC": "Anthropogenic",
      "MTO": "Exogeological",
      "CRY": "Crystalline",
      "EXP": "Synthesized"
    };

    // Level 3 subcategories
    const submenuLevel3Items = {
      "FOS": ["FOS-AMB", "FOS-VRT", "FOS-INV", "FOS-PLT", "FOS-TRC", "FOS-MIC"],
      "MIN": ["MIN-SIL", "MIN-OXI", "MIN-SUL", "MIN-CAR", "MIN-HAL", "MIN-GEM"],
      "MET": ["MET-PRE", "MET-BAS", "MET-RRE", "MET-ALL", "MET-RAW"],
      "GEO": ["GEO-ROK", "GEO-SED", "GEO-IGN", "GEO-MET", "GEO-COR", "GEO-STR"],
      "BIO": ["BIO-BOT", "BIO-ZOO", "BIO-MIC", "BIO-DNA", "BIO-TIS", "BIO-PRE"],
      "ARC": ["ARC-LIT", "ARC-CER", "ARC-MET", "ARC-ORG", "ARC-TXT", "ARC-WRT"],
      "MTO": ["MTO-IRO", "MTO-STO", "MTO-STI", "MTO-TEK", "MTO-LUN", "MTO-MAR"],
      "CRY": ["CRY-SIN", "CRY-GRO", "CRY-LAT", "CRY-SYN", "CRY-OPT", "CRY-ELE"],
      "EXP": ["EXP-SYN", "EXP-COM", "EXP-ALT", "EXP-RAD", "EXP-PRE", "EXP-TEM"]
    };

    const subcategoryDescriptions = {
    "FOS-AMB": "Amberfication",
    "FOS-VRT": "Vert. remains",
    "FOS-INV": "Invert. remains",
    "FOS-PLT": "Phytofossils",
    "FOS-TRC": "Ichnofossils",
    "FOS-MIC": "Microfossilia",
    "MIN-SIL": "Silicaceous",
    "MIN-OXI": "Oxidized min.",
    "MIN-SUL": "Sulfidic min.",
    "MIN-CAR": "Carbonatic",
    "MIN-HAL": "Halogenic",
    "MIN-GEM": "Lapidary spec.",
    "MET-PRE": "Nobel metals",
    "MET-BAS": "Base metallics",
    "MET-RRE": "Lanthanides",
    "MET-ALL": "Geogenic alloys",
    "MET-RAW": "Unproc. ores",
    "GEO-ROK": "Litho. samples",
    "GEO-SED": "Sedimentary",
    "GEO-IGN": "Magmatic",
    "GEO-MET": "Metamorphic",
    "GEO-COR": "Core extracts",
    "GEO-STR": "Stratigraphic",
    "BIO-BOT": "Botanical",
    "BIO-ZOO": "Zoological",
    "BIO-MIC": "Microbial",
    "BIO-DNA": "Genomic",
    "BIO-TIS": "Histological",
    "BIO-PRE": "Preserved biota",
    "ARC-LIT": "Lithic artif.",
    "ARC-CER": "Ceramics",
    "ARC-MET": "Metallurgical",
    "ARC-ORG": "Organics",
    "ARC-TXT": "Textiles",
    "ARC-WRT": "Epigraphic",
    "MTO-IRO": "Siderites",
    "MTO-STO": "Aerolites",
    "MTO-STI": "Siderolites",
    "MTO-TEK": "Tektites",
    "MTO-LUN": "Selenological",
    "MTO-MAR": "Areological",
    "CRY-SIN": "Monocrystals",
    "CRY-GRO": "Crystallogeny",
    "CRY-LAT": "Bravais struct.",
    "CRY-SYN": "Anthropogenic",
    "CRY-OPT": "Photocrystal.",
    "CRY-ELE": "Electrocrystal.",
    "EXP-SYN": "Synthesized",
    "EXP-COM": "Composites",
    "EXP-ALT": "Modified nat.",
    "EXP-RAD": "Irradiated",
    "EXP-PRE": "Barofacted",
    "EXP-TEM": "Thermofacted"
};



    // DOM elements
    const mainCategory = document.getElementById("main-category");
    const submenu = document.getElementById("submenu");
    const submenuLevel3 = document.getElementById("submenu-level3");

    // State variables
    let isMenuVisible = false;
    let activeLevel2 = null;
    let selectedItem = null;
    let targetAngleOffset = 0;
    let currentAngleOffset = 0;
    let targetAngleOffsetLevel3 = 0;
    let currentAngleOffsetLevel3 = 0;
    let animationFrameId = null;
    let isAnimating = false;
    let debugMode = true; // Enable for debugging

    // Correction factor for level 3 alignment (adjust this value if needed)
    const level3CorrectionFactor = 0; // Changed from +10 to -10 to reverse the correction

    // Calculate opacity based on absolute position
    // Items between -90 and 90 degrees are fully visible
    // Items beyond 90 or -90 degrees fade out
    // Visibility thresholds in degrees (converted to radians for calculations)
    const VISIBLE_THRESHOLD = 80 * (Math.PI / 180); // 80 degrees in radians
    const FADE_RANGE = 10 * (Math.PI / 180); // 10 degrees fade range (steeper fade)

    // Calculate opacity based on absolute position with steeper fade
    function calculateStaticOpacity(baseAngle, containerRotation) {
      // Convert degrees to radians for calculations
      const containerRotationRad = containerRotation * (Math.PI / 180);

      // Calculate the absolute angle in the viewport (base angle + container rotation)
      const absoluteAngle = baseAngle + containerRotationRad;

      // Normalize to 0-2π range
      const normalizedAngle = ((absoluteAngle % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      // Convert to -π to π range for easier calculations
      const centeredAngle = normalizedAngle > Math.PI ? normalizedAngle - 2 * Math.PI : normalizedAngle;

      // Check if the item is within the visible threshold (-80° to 80°)
      if (Math.abs(centeredAngle) <= VISIBLE_THRESHOLD) {
        // Item is in the fully visible range
        return 1;
      } else {
        // Item is outside the visible range - calculate fade
        // Determine how far beyond the threshold the item is
        const distanceBeyondThreshold = Math.abs(centeredAngle) - VISIBLE_THRESHOLD;

        // Create a steeper fade using a smaller fade range
        // This will make items disappear more quickly once they pass the threshold
        const fadeRatio = Math.pow(Math.min(distanceBeyondThreshold / FADE_RANGE, 1), 2);

        // Calculate opacity (1 = fully visible at threshold, 0 = invisible beyond threshold + fade range)
        return Math.max(0, 1 - fadeRatio);
      }
    }

    function createMenuItems(items, container, radius, clickHandler, descriptions) {
      container.innerHTML = "";
      const centerX = container.offsetWidth / 2;
      const centerY = container.offsetHeight / 2;
      const containerRotation = container.id === "submenu-level3" ? currentAngleOffsetLevel3 : currentAngleOffset;

      items.forEach((item, index) => {
        const baseAngle = (-90 + (180 / (items.length - 1)) * index) * (Math.PI / 180);
        const x = centerX + radius * Math.cos(baseAngle);
        const y = centerY + radius * Math.sin(baseAngle);
        const opacity = calculateStaticOpacity(baseAngle, containerRotation);

        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");
        menuItem.dataset.baseAngle = baseAngle;
        menuItem.style.left = `${x}px`;
        menuItem.style.top = `${y}px`;
        // Start with the proper rotation and scale(0)
        menuItem.style.transform = `translate(-50%, -50%) rotate(${baseAngle * 180 / Math.PI}deg) scale(0)`;
        menuItem.style.opacity = "0";

        // Create selection dot
        const selectionDot = document.createElement("div");
        selectionDot.classList.add("selection-dot");

        // Create content div with text and description
        const contentDiv = document.createElement("div");
        const textSpan = document.createElement("span");
        textSpan.textContent = item;
        contentDiv.appendChild(textSpan);

        if (descriptions && descriptions[item]) {
          const descSpan = document.createElement("span");
          descSpan.classList.add("item-description");
          descSpan.textContent = descriptions[item];
          contentDiv.appendChild(descSpan);
        }

        menuItem.appendChild(selectionDot);
        menuItem.appendChild(contentDiv);

        if (item === selectedItem) menuItem.classList.add("selected");
        if (item === activeLevel2) menuItem.classList.add("active");

        // For level 3 items: use the original click behavior (selectItem)
        // and then open the modal.
        if (container.id === "submenu-level3") {
          menuItem.addEventListener("click", (event) => {
            event.stopPropagation();
            event.preventDefault();
            // Original behavior: rotate/select the item
            selectItem(item);
            // Then open the modal (you can adjust timing if needed)
            openModal(`specimen/${item.toLowerCase()}.html`, item);
          });
        } else {
          // For level 2 items: use the provided click handler to show level 3 items.
          menuItem.addEventListener("click", (event) => {
            event.stopPropagation();
            if (clickHandler) {
              clickHandler(item);
            }
          });
        }

        container.appendChild(menuItem);

        // Bloom effect - animate items into view with rotation and scale
        setTimeout(() => {
          menuItem.style.transform = `translate(-50%, -50%) rotate(${baseAngle * 180 / Math.PI}deg) scale(1)`;
          menuItem.style.opacity = opacity;
        }, index * 80);
      });
    }




    // Update opacities of all menu items when containers rotate
    function updateItemOpacities() {
      // Update level 2 items
      document.querySelectorAll("#submenu .menu-item").forEach(item => {
        if (item.classList.contains("main-category")) return;
        const baseAngle = parseFloat(item.dataset.baseAngle || 0);
        item.style.opacity = calculateStaticOpacity(baseAngle, currentAngleOffset);
      });

      // Update level 3 items
      document.querySelectorAll("#submenu-level3 .menu-item").forEach(item => {
        const baseAngle = parseFloat(item.dataset.baseAngle || 0);
        item.style.opacity = calculateStaticOpacity(baseAngle, currentAngleOffsetLevel3);
      });
    }

    // Select a Level 3 item (via click)
    function selectItem(item) {
      document.querySelectorAll(".menu-item.selected").forEach(el => el.classList.remove("selected"));
      selectedItem = item;
      document.querySelectorAll("#submenu-level3 .menu-item").forEach(el => {
        if (el.querySelector("div span").textContent === item) el.classList.add("selected");
      });
      selectLevel3Item(item);
    }

    // When switching Level 2, reset the Level 3 container
    function alignSelections() {
      if (!activeLevel2) return;
      isAnimating = true;

      // Align Level 2
      const level2Items = submenuItems["HRC"];
      const level2Index = level2Items.indexOf(activeLevel2);
      if (level2Index !== -1) {
        const level2Angle = (-90 + (180 / (level2Items.length - 1)) * level2Index) * (Math.PI / 180);
        targetAngleOffset = -(level2Angle * 180 / Math.PI);
      }

      // Reset Level 3 to neutral position (0 degrees)
      targetAngleOffsetLevel3 = 0;
      currentAngleOffsetLevel3 = 0;

      // Force an immediate reset of the level 3 container to ensure a clean state
      submenuLevel3.style.transform = `translate(-50%, -50%) rotate(0deg)`;

      if (debugMode) {
        console.log("Aligning selections:");
        console.log("Active Level 2:", activeLevel2);
        console.log("Target Level 2 Angle:", targetAngleOffset);
        console.log("Target Level 3 Angle:", targetAngleOffsetLevel3);
      }

      // Start animation
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(animateRotation);
    }

    // When a Level 3 item is selected, align it to 0 degrees
    function selectLevel3Item(item) {
      if (!activeLevel2) return;
      selectedItem = item;

      const level3Items = submenuLevel3Items[activeLevel2] || [];
      const level3Index = level3Items.indexOf(item);

      if (level3Index !== -1 && level3Items.length > 0) {
        // Calculate the angle of the selected level 3 item
        const stepAngle = 180 / (level3Items.length - 1);
        const itemAngle = -90 + stepAngle * level3Index;

        // Set rotation to position the selected item at 0 degrees
        // Add the correction factor to fix the misalignment
        targetAngleOffsetLevel3 = -itemAngle + level3CorrectionFactor;

        if (debugMode) {
          console.log("Selected Level 3 Item:", item);
          console.log("Level 3 Index:", level3Index);
          console.log("Item Angle:", itemAngle);
          console.log("Target Rotation (with correction):", targetAngleOffsetLevel3);
        }
      }

      isAnimating = true;
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(animateRotation);
    }

    // Smooth animation handling with improved easing
    function animateRotation() {
      // Use the same easing for both level 2 and level 3 for consistency
      const easeAmount = 0.16; // Smaller value = smoother, slower animation

      let diffLevel2 = targetAngleOffset - currentAngleOffset;
      let diffLevel3 = targetAngleOffsetLevel3 - currentAngleOffsetLevel3;

      // Apply easing to both levels
      currentAngleOffset += diffLevel2 * easeAmount;
      currentAngleOffsetLevel3 += diffLevel3 * easeAmount;

      // Apply transforms
      submenu.style.transform = `translate(-50%, -50%) rotate(${currentAngleOffset}deg)`;
      submenuLevel3.style.transform = `translate(-50%, -50%) rotate(${currentAngleOffsetLevel3}deg)`;

      // Update opacities based on new rotations
      updateItemOpacities();

      // Continue animation until both levels are close enough to target
      if (Math.abs(diffLevel2) > 0.1 || Math.abs(diffLevel3) > 0.1) {
        animationFrameId = requestAnimationFrame(animateRotation);
      } else {
        // Snap to exact values when close enough
        currentAngleOffset = targetAngleOffset;
        currentAngleOffsetLevel3 = targetAngleOffsetLevel3;

        // Apply final transforms with precise values
        submenu.style.transform = `translate(-50%, -50%) rotate(${currentAngleOffset}deg)`;
        submenuLevel3.style.transform = `translate(-50%, -50%) rotate(${currentAngleOffsetLevel3}deg)`;

        // Final opacity update
        updateItemOpacities();

        if (debugMode) {
          console.log("Animation complete:");
          console.log("Final Level 2 Angle:", currentAngleOffset);
          console.log("Final Level 3 Angle:", currentAngleOffsetLevel3);
        }

        isAnimating = false;
      }
    }

    // Toggle Level 2 menu
    function toggleMenu() {
      isMenuVisible = !isMenuVisible;
      mainCategory.classList.toggle("active", isMenuVisible);
      submenu.classList.toggle("active", isMenuVisible);

      if (!isMenuVisible) {
        submenuLevel3.classList.remove("active");
        activeLevel2 = null;
        selectedItem = null;
      }

      if (isMenuVisible) {
        createMenuItems(submenuItems["HRC"], submenu, 170, openLevel3Menu, categoryDescriptions);
      }
    }

    // Open Level 3 menu
    function openLevel3Menu(level2Item) {
      // Completely reset level 3 container when changing level 2 items
      if (activeLevel2 !== level2Item) {
        // Force an immediate reset to ensure a clean state
        targetAngleOffsetLevel3 = 0;
        currentAngleOffsetLevel3 = 0;
        submenuLevel3.style.transform = `translate(-50%, -50%) rotate(0deg)`;
      }

      if (activeLevel2 === level2Item) {
        const isLevel3Visible = submenuLevel3.classList.contains("active");
        if (isLevel3Visible) {
          submenuLevel3.classList.remove("active");
          document.querySelectorAll("#submenu .menu-item").forEach(item => {
            if (item.querySelector("div span").textContent === activeLevel2) {
              item.classList.remove("active");
            }
          });
          activeLevel2 = null;
          selectedItem = null;
        } else {
          createMenuItems(submenuLevel3Items[level2Item] || [], submenuLevel3, 300, null, subcategoryDescriptions);
          submenuLevel3.classList.add("active");
        }
      } else {
        document.querySelectorAll("#submenu .menu-item").forEach(item => item.classList.remove("active"));
        activeLevel2 = level2Item;
        selectedItem = null;
        document.querySelectorAll("#submenu .menu-item").forEach(item => {
          if (item.querySelector("div span").textContent === level2Item) {
            item.classList.add("active");
          }
        });
        createMenuItems(submenuLevel3Items[level2Item] || [], submenuLevel3, 300, null, subcategoryDescriptions);
        submenuLevel3.classList.add("active");

        // Make sure to align the selections when opening a new level 3 menu
        alignSelections();
      }

      // Start animation for smooth transition
      isAnimating = true;
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(animateRotation);
    }

    // Scroll event listeners for independent rotation
    function handleWheelLevel2(event) {
      if (!isMenuVisible) return;
      event.preventDefault();
      targetAngleOffset += event.deltaY > 0 ? 5 : -5;
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(animateRotation);
    }

    function handleWheelLevel3(event) {
      if (!isMenuVisible) return;
      event.preventDefault();
      event.stopPropagation();
      targetAngleOffsetLevel3 += event.deltaY > 0 ? 5 : -5;
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(animateRotation);
    }

    submenu.addEventListener("wheel", handleWheelLevel2, { passive: false });
    submenuLevel3.addEventListener("wheel", handleWheelLevel3, { passive: false });

//    function handleClickOutside(event) {
//      const isClickInsideMenu = submenu.contains(event.target) ||
//                                submenuLevel3.contains(event.target) ||
//                                event.target === mainCategory;
//      if (!isClickInsideMenu) {
//        if (activeLevel2) {
//          document.querySelectorAll("#submenu .menu-item").forEach(item => {
//            if (item.querySelector("div span").textContent === activeLevel2) {
//              item.classList.remove("active");
//            }
//          });
//          submenuLevel3.classList.remove("active");
//          activeLevel2 = null;
//          selectedItem = null;
//        }
//      }
//    }

    mainCategory.addEventListener("click", toggleMenu);
    //document.addEventListener("click", handleClickOutside);









    document.addEventListener('DOMContentLoaded', () => {
    // Main cursor elements
    const cursor = document.querySelector('.cursor');
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorGlow = document.querySelector('.cursor-glow');
    const cursorContainer = document.querySelector('.cursor-container');
    const interactiveElements = document.querySelectorAll('.interactive');

    // Cursor state
    let cursorX = 0, cursorY = 0, mouseX = 0, mouseY = 0;
    let prevMouseX = 0, prevMouseY = 0;
    let cursorScale = 1;
    let cursorColor = { r: 0, g: 255, b: 255 };
    let isClicking = false;
    let cursorSpeed = 0;
    let isGlitching = false;

    // Create trails
    const trails = [];
    const trailCount = 0;
    for (let i = 0; i < trailCount; i++) {
      const trail = document.createElement('div');
      trail.classList.add('cursor-trail');
      cursorContainer.appendChild(trail);
      trails.push({
        element: trail,
        x: 0,
        y: 0,
        delay: i * 30,
        scale: 1 - (i * 0.1)
      });
    }

    // Particle system
    const particles = [];
    const maxParticles = 30;

    function createParticle(x, y, type = 'normal') {
      if (particles.length >= maxParticles) {
        const oldParticle = particles.shift();
        cursorContainer.removeChild(oldParticle.element);
      }

      const particle = document.createElement('div');
      particle.classList.add('particle');

      let size, duration, speedX, speedY, color;

      switch(type) {
        case 'click':
          size = Math.random() * 0.1 + 1;
          duration = Math.random() * 1000 + 500;
          speedX = (Math.random() - 0.5) * 8;
          speedY = (Math.random() - 0.5) * 8;
          color = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.3})`;
          break;
        case 'glitch':
          size = Math.random() * 1 + 2;
          duration = Math.random() * 15 + 10;
          speedX = (Math.random() - 0.5) * 15;
          speedY = (Math.random() - 0.5) * 15;
          color = `rgba(255, ${Math.random() * 100}, ${Math.random() * 255}, ${Math.random() * 0.7 + 0.3})`;
          break;
        case 'explode':
          size = Math.random() * 0.2 + 2;
          duration = Math.random() * 1500 + 800;
          speedX = (Math.random() - 0.5) * 12;
          speedY = (Math.random() - 0.5) * 12;
          color = `rgba(${Math.random() * 100 + 155}, 255, 255, ${Math.random() * 0.6 + 0.4})`;
          break;
        default:
          size = Math.random() * 5 + 1;
          duration = Math.random() * 800 + 200;
          speedX = (Math.random() - 0.5) * 3;
          speedY = (Math.random() - 0.5) * 3;
          color = `rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1})`;
      }

      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particle.style.backgroundColor = color;

      cursorContainer.appendChild(particle);

      const newParticle = {
        element: particle,
        x,
        y,
        speedX,
        speedY,
        size,
        life: 1,
        duration,
        createdAt: Date.now()
      };

      particles.push(newParticle);
      return newParticle;
    }

    function updateParticles() {
      const now = Date.now();
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        const age = now - particle.createdAt;

        if (age >= particle.duration) {
          cursorContainer.removeChild(particle.element);
          particles.splice(i, 1);
          continue;
        }

        particle.life = 1 - (age / particle.duration);
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.speedY += 0.05; // Gravity

        particle.element.style.left = `${particle.x}px`;
        particle.element.style.top = `${particle.y}px`;
        particle.element.style.opacity = particle.life;
        particle.element.style.transform = `scale(${particle.life})`;
      }
    }

    // Click ripple effect
    function createRipple(x, y) {
      const ripple = document.createElement('div');
      ripple.classList.add('click-ripple');
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      cursorContainer.appendChild(ripple);

      let scale = 1;
      const expandRipple = setInterval(() => {
        scale += 0.5;
        const opacity = 1 - (scale - 1) / 5;

        ripple.style.transform = `translate(-50%, -50%) scale(${scale})`;
        ripple.style.opacity = opacity;

        if (scale >= 6) {
          clearInterval(expandRipple);
          cursorContainer.removeChild(ripple);
        }
      }, 20);
    }

    // Mouse events
    document.addEventListener('mousemove', (e) => {
      prevMouseX = mouseX;
      prevMouseY = mouseY;
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Calculate cursor speed
      const dx = mouseX - prevMouseX;
      const dy = mouseY - prevMouseY;
      cursorSpeed = Math.sqrt(dx * dx + dy * dy);

      // Update cursor dot position immediately
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;

      // Create particles based on speed
      if (cursorSpeed > 5 && Math.random() > 0.7) {
        createParticle(mouseX, mouseY);
      }

      // Glitch effect randomly
      if (Math.random() > 0.995 && !isGlitching) {
        triggerGlitch();
      }
    });

    document.addEventListener('mousedown', (e) => {
      isClicking = true;
      cursorScale = 0.8;
      cursor.style.transform = `translate(-50%, -50%) scale(${cursorScale})`;

      // Create click particles
      for (let i = 0; i < 10; i++) {
        createParticle(mouseX, mouseY, 'click');
      }

      // Create ripple effect
      createRipple(mouseX, mouseY);
    });

    document.addEventListener('mouseup', () => {
      isClicking = false;
      cursorScale = 1;
      cursor.style.transform = `translate(-50%, -50%) scale(${cursorScale})`;
    });

    document.addEventListener('mouseleave', () => {
      cursor.style.opacity = 0;
      cursorDot.style.opacity = 0;
      cursorGlow.style.opacity = 0;
      trails.forEach(trail => {
        trail.element.style.opacity = 0;
      });
    });

    document.addEventListener('mouseenter', () => {
      cursor.style.opacity = 0.5;
      cursorDot.style.opacity = 1;
      cursorGlow.style.opacity = 0.5;
      trails.forEach((trail, index) => {
        trail.element.style.opacity = 0.6 - index * 0.05;
      });
    });

    // Interactive elements behavior
    interactiveElements.forEach(element => {
      const type = element.getAttribute('data-type');

      element.addEventListener('mouseover', () => {
        switch(type) {
          case 'repel':
            cursor.style.borderColor = 'rgba(255, 0, 100, 0.8)';
            cursorDot.style.backgroundColor = 'rgba(255, 0, 100, 0.9)';
            cursorColor = { r: 255, g: 0, b: 100 };
            break;
          case 'attract':
            cursor.style.borderColor = 'rgba(0, 255, 100, 0.8)';
            cursorDot.style.backgroundColor = 'rgba(0, 255, 100, 0.9)';
            cursorColor = { r: 0, g: 255, b: 100 };
            break;
          case 'explode':
            cursor.style.borderColor = 'rgba(255, 200, 0, 0.8)';
            cursorDot.style.backgroundColor = 'rgba(255, 200, 0, 0.9)';
            cursorColor = { r: 255, g: 200, b: 0 };
            // Create explosion particles
            for (let i = 0; i < 20; i++) {
              createParticle(mouseX, mouseY, 'explode');
            }
            break;
          case 'glitch':
            cursor.style.borderColor = 'rgba(255, 0, 255, 0.8)';
            cursorDot.style.backgroundColor = 'rgba(255, 0, 255, 0.9)';
            cursorColor = { r: 255, g: 0, b: 255 };
            triggerGlitch();
            break;
        }

        // Update trails color
        trails.forEach(trail => {
          trail.element.style.borderColor = `rgba(${cursorColor.r}, ${cursorColor.g}, ${cursorColor.b}, 0.4)`;
          trail.element.style.backgroundColor = `rgba(${cursorColor.r}, ${cursorColor.g}, ${cursorColor.b}, 0.1)`;
        });

        // Update glow color
        cursorGlow.style.background = `radial-gradient(circle, rgba(${cursorColor.r}, ${cursorColor.g}, ${cursorColor.b}, 0.2) 0%, rgba(${cursorColor.r}, ${cursorColor.g}, ${cursorColor.b}, 0) 70%)`;
      });

      element.addEventListener('mouseout', () => {
        cursor.style.borderColor = 'rgba(255, 255, 255, 0.8)';
        cursorDot.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
        cursorColor = { r: 0, g: 255, b: 255 };

        // Reset trails color
        trails.forEach(trail => {
          trail.element.style.borderColor = 'rgba(255, 255, 255, 0.4)';
          trail.element.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        });

        // Reset glow color
        cursorGlow.style.background = 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 70%)';
      });
    });

    // Glitch effect
    function triggerGlitch() {
      if (isGlitching) return;

      isGlitching = true;

      // Create glitch particles
      for (let i = 0; i < 15; i++) {
        createParticle(mouseX, mouseY, 'glitch');
      }

      // Glitch cursor appearance
      const glitchInterval = setInterval(() => {
        cursor.style.transform = `translate(-50%, -50%) scale(${Math.random() * 1.5 + 0.5}) rotate(${Math.random() * 30 - 15}deg)`;
        cursor.style.borderColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.8)`;
        cursorDot.style.transform = `translate(-50%, -50%) scale(${Math.random() * 2 + 0.5})`;
        cursorDot.style.backgroundColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.9)`;

        // Random offset
        const offsetX = (Math.random() - 0.5) * 20;
        const offsetY = (Math.random() - 0.5) * 20;
        cursor.style.marginLeft = `${offsetX}px`;
        cursor.style.marginTop = `${offsetY}px`;
        cursorDot.style.marginLeft = `${offsetX * 0.5}px`;
        cursorDot.style.marginTop = `${offsetY * 0.5}px`;
      }, 50);

      // End glitch effect
      setTimeout(() => {
        clearInterval(glitchInterval);
        cursor.style.transform = `translate(-50%, -50%) scale(${cursorScale})`;
        cursor.style.borderColor = `rgba(${cursorColor.r}, ${cursorColor.g}, ${cursorColor.b}, 0.8)`;
        cursorDot.style.transform = 'translate(-50%, -50%)';
        cursorDot.style.backgroundColor = `rgba(${cursorColor.r}, ${cursorColor.g}, ${cursorColor.b}, 0.9)`;
        cursor.style.marginLeft = '0px';
        cursor.style.marginTop = '0px';
        cursorDot.style.marginLeft = '0px';
        cursorDot.style.marginTop = '0px';
        isGlitching = false;
      }, 500);
    }

    // Magnetic effect for interactive elements
    function updateMagneticEffect() {
      interactiveElements.forEach(element => {
        const type = element.getAttribute('data-type');
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distX = centerX - mouseX;
        const distY = centerY - mouseY;
        const distance = Math.sqrt(distX * distX + distY * distY);
        const maxDistance = 200;

        if (distance < maxDistance) {
          const force = type === 'repel' ? 1 : -1;
          const power = (1 - distance / maxDistance) * force;
          const moveX = distX * power * 0.1;
          const moveY = distY * power * 0.1;

          element.style.transform = `translate(${-moveX}px, ${-moveY}px)`;
          element.style.boxShadow = `0 0 0px rgba(${cursorColor.r}, ${cursorColor.g}, ${cursorColor.b}, ${0.3 * (1 - distance / maxDistance)})`;
        } else {
          element.style.transform = 'translate(0, 0)';
          element.style.boxShadow = 'none';
        }
      });
    }

    // Main animation loop
    function animateCursor() {
      // Smooth cursor following
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;

      // Update main cursor
      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;

      // Update cursor glow
      cursorGlow.style.left = `${cursorX}px`;
      cursorGlow.style.top = `${cursorY}px`;

      // Dynamic cursor size based on speed
      const speedScale = Math.min(1 + cursorSpeed * 0.01, 1.5);
      if (!isClicking && !isGlitching) {
        cursor.style.transform = `translate(-50%, -50%) scale(${speedScale})`;
      }

      // Update trails with staggered delay
      trails.forEach((trail, index) => {
        setTimeout(() => {
          trail.x += (cursorX - trail.x) * 0.3;
          trail.y += (cursorY - trail.y) * 0.3;

          trail.element.style.left = `${trail.x}px`;
          trail.element.style.top = `${trail.y}px`;
          trail.element.style.transform = `translate(-50%, -50%) scale(${trail.scale * speedScale})`;
          trail.element.style.opacity = 0.6 - index * 0.05;
        }, trail.delay);
      });

      // Update particles
      updateParticles();

      // Update magnetic effect
      updateMagneticEffect();

      // Continue animation loop
      requestAnimationFrame(animateCursor);
    }

    // Start animation
    animateCursor();

    // Emit particles periodically when cursor is moving
    setInterval(() => {
      if (cursorSpeed > 1 && Math.random() > 0.7) {
        createParticle(cursorX, cursorY);
      }
    }, 100);
  });














  // This script initializes the infinite canvas when the page loads
  document.addEventListener("DOMContentLoaded", () => {
    // Initialize the infinite canvas
    // Alt: define initInfiniteCanvas in a separate module
    // For example: import { initInfiniteCanvas } from './infinite-canvas';
    // Here it's a global function:
    function initInfiniteCanvas() {
      // Implementation of initInfiniteCanvas function goes here
      console.log("initInfiniteCanvas called") // Placeholder implementation
    }
    initInfiniteCanvas()

    // Add a small delay to ensure all elements are properly positioned
    setTimeout(() => {
      const viewport = document.getElementById("infinite-canvas-viewport")
      const container = document.getElementById("infinite-canvas-container")

      if (container) {
        console.log(container.offsetWidth);
      } else {
        console.log("Container not found!");
      }

      // Center the canvas initially
      viewport.scrollLeft = (container.offsetWidth - viewport.offsetWidth) / 2
      viewport.scrollTop = (container.offsetHeight - viewport.offsetHeight) / 2
    }, 100)

    // Initialize zoom controls if they don't exist
    const controlsDiv = document.getElementById("controls")

    // Declare zoomCanvas and resetZoom functions (or import them)
    // For this example, we'll define placeholder functions.
    // In a real application, you would import or define these properly.
    const zoomCanvas = (zoomFactor) => {
      console.log("zoomCanvas called with factor:", zoomFactor)
      // Implement zoom logic here
    }

    const resetZoom = () => {
      console.log("resetZoom called")
      // Implement reset zoom logic here
    }

    if (controlsDiv && !document.getElementById("zoomInBtn")) {
      // Create zoom in button
      const zoomInBtn = document.createElement("button")
      zoomInBtn.id = "zoomInBtn"
      zoomInBtn.className = "btn-fullscreen btn-zoom"
      zoomInBtn.innerHTML = "+"
      zoomInBtn.title = "Zoom In"

      // Create zoom out button
      const zoomOutBtn = document.createElement("button")
      zoomOutBtn.id = "zoomOutBtn"
      zoomOutBtn.className = "btn-fullscreen btn-zoom"
      zoomOutBtn.innerHTML = "−" // Using minus sign, not hyphen
      zoomOutBtn.title = "Zoom Out"

      // Create reset zoom button
      const resetZoomBtn = document.createElement("button")
      resetZoomBtn.id = "resetZoomBtn"
      resetZoomBtn.className = "btn-fullscreen btn-zoom"
      resetZoomBtn.innerHTML = "100%"
      resetZoomBtn.title = "Reset Zoom"

      // Add zoom controls to the controls div
      controlsDiv.appendChild(zoomInBtn)
      controlsDiv.appendChild(resetZoomBtn)
      controlsDiv.appendChild(zoomOutBtn)

      // Add event listeners for zoom controls
      zoomInBtn.addEventListener("click", () => {
        if (typeof zoomCanvas === "function") {
          zoomCanvas(0.2)
        } else {
          console.error("zoomCanvas function not found")
        }
      })

      zoomOutBtn.addEventListener("click", () => {
        if (typeof zoomCanvas === "function") {
          zoomCanvas(-0.2)
        } else {
          console.error("zoomCanvas function not found")
        }
      })

      resetZoomBtn.addEventListener("click", () => {
        if (typeof resetZoom === "function") {
          resetZoom()
        } else {
          console.error("resetZoom function not found")
        }
      })
    }

    // Initialize the origins descriptions if not already defined
    if (!window.originsDescriptions) {
      window.originsDescriptions = {
        // Geographical Origins
        "GEO-AFR": "Africa",
        "GEO-ANT": "Antarctica",
        "GEO-ASI": "Asia",
        "GEO-EUR": "Europe",
        "GEO-NAM": "North America",
        "GEO-SAM": "South America",
        "GEO-OCE": "Oceania",

        // Specific Regions
        "GEO-BAL": "Baltic States",
        "GEO-ALP": "Alpine Regions",
        "GEO-ARC": "Arctic Region",
        "GEO-ANR": "Antarctic Region",
        "GEO-MED": "Mediterranean Basin",
        "GEO-AMZ": "Amazon Basin",
        "GEO-GRP": "Great Plains",
        "GEO-AND": "Andes Mountains",

        // Tectonic Plate Origins
        "TEC-PAC": "Pacific Plate",
        "TEC-EUR": "Eurasian Plate",
        "TEC-NAM": "North American Plate",
        "TEC-AFR": "African Plate",
        "TEC-ANT": "Antarctic Plate",
        "TEC-IND": "Indo-Australian Plate",

        // Geological Formations
        "GEL-MOR": "Mid-Ocean Ridges",
        "GEL-CSH": "Continental Shelves",
        "GEL-VOL": "Volcanic Regions",
        "GEL-SED": "Sedimentary Basins",
        "GEL-MTN": "Mountain Ranges",
        "GEL-RFT": "Rift Valleys",

        // Biological Ecosystems
        "ECO-TRF": "Tropical Rainforest",
        "ECO-TMF": "Temperate Forest",
        "ECO-DST": "Desert",
        "ECO-TUN": "Tundra",
        "ECO-GRS": "Grasslands",
        "ECO-MAR": "Marine Environments",
        "ECO-FRW": "Freshwater Ecosystems",
        "ECO-ALP": "Alpine Ecosystems",

        // Celestial Origins
        "CEL-LUN": "Lunar Origin",
        "CEL-MAR": "Martian Origin",
        "CEL-MTS": "Meteorite Showers",
        "CEL-AST": "Asteroid Belt",
        "CEL-ISP": "Interstellar Space",

        // Archaeological Regions
        "ARC-MES": "Mesopotamia",
        "ARC-IDV": "Indus Valley",
        "ARC-EGY": "Ancient Egypt",
        "ARC-MSA": "Mesoamerica",
        "ARC-AND": "Andean Civilizations",
        "ARC-MED": "Mediterranean Civilizations",

        // Historical Periods
        "HIS-PAL": "Paleolithic",
        "HIS-NEO": "Neolithic",
        "HIS-BRZ": "Bronze Age",
        "HIS-IRN": "Iron Age",
        "HIS-CLA": "Classical Antiquity",
        "HIS-MED": "Medieval Period",
      }
    }
  })

  // Map and filter functionality for modals
  function createModalMap(modalContainer, contentUrl, itemName) {
    // Create the map container - now positioned outside the modal
    const mapContainer = document.createElement("div")
    mapContainer.classList.add("modal-map-container")

    // Create the filter section
    const filterSection = document.createElement("div")
    filterSection.classList.add("filter-section")

    // Create filter header
    const filterHeader = document.createElement("div")
    filterHeader.classList.add("filter-header")
    filterHeader.innerHTML = `
      <h5>Origin</h5>
      <div class="filter-actions">
        <button id="clear-filters" class="filter-button">Clear All</button>
        <button id="toggle-filters" class="filter-button">Hide Filters</button>
      </div>
    `
    filterSection.appendChild(filterHeader)

    // Create filter categories
    const categories = {
      Geographical: [
        "GEO-AFR",
        "GEO-ANT",
        "GEO-ASI",
        "GEO-EUR",
        "GEO-NAM",
        "GEO-SAM",
        "GEO-OCE",
        "GEO-BAL",
        "GEO-ALP",
        "GEO-ARC",
        "GEO-ANR",
        "GEO-MED",
        "GEO-AMZ",
        "GEO-GRP",
        "GEO-AND",
      ],
      Tectonic: ["TEC-PAC", "TEC-EUR", "TEC-NAM", "TEC-AFR", "TEC-ANT", "TEC-IND"],
      Geological: ["GEL-MOR", "GEL-CSH", "GEL-VOL", "GEL-SED", "GEL-MTN", "GEL-RFT"],
      Ecosystems: ["ECO-TRF", "ECO-TMF", "ECO-DST", "ECO-TUN", "ECO-GRS", "ECO-MAR", "ECO-FRW", "ECO-ALP"],
      Celestial: ["CEL-LUN", "CEL-MAR", "CEL-MTS", "CEL-AST", "CEL-ISP"],
      Archaeological: ["ARC-MES", "ARC-IDV", "ARC-EGY", "ARC-MSA", "ARC-AND", "ARC-MED"],
      Historical: ["HIS-PAL", "HIS-NEO", "HIS-BRZ", "HIS-IRN", "HIS-CLA", "HIS-MED"],
    }

    // Create filter groups
    const filterGroups = document.createElement("div")
    filterGroups.classList.add("filter-groups")

    // Create each category group
    Object.entries(categories).forEach(([category, codes]) => {
      const categoryGroup = document.createElement("div")
      categoryGroup.classList.add("filter-category")

      const categoryHeader = document.createElement("h5")
      categoryHeader.textContent = category
      categoryHeader.classList.add("category-header")
      categoryGroup.appendChild(categoryHeader)

      const filtersContainer = document.createElement("div")
      filtersContainer.classList.add("filters-container")

      // Add filters for this category
      codes.forEach((code) => {
        const filterItem = document.createElement("div")
        filterItem.classList.add("filter-item")

        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.id = `filter-${code}`
        checkbox.dataset.filterCode = code

        const label = document.createElement("label")
        label.htmlFor = `filter-${code}`
        label.textContent = window.originsDescriptions[code] || code

        filterItem.appendChild(checkbox)
        filterItem.appendChild(label)
        filtersContainer.appendChild(filterItem)
      })

      categoryGroup.appendChild(filtersContainer)
      filterGroups.appendChild(categoryGroup)
    })

    filterSection.appendChild(filterGroups)
    mapContainer.appendChild(filterSection)

    // Create the map visualization area
    const mapVisualization = document.createElement("div")
    mapVisualization.classList.add("map-visualization")
    mapVisualization.innerHTML = `
      <div class="map-loading">Loading map visualization...</div>
      <div class="map-canvas"></div>
    `
    mapContainer.appendChild(mapVisualization)

    // Create a tab/handle for the filter panel
    const filterTab = document.createElement("div")
    filterTab.classList.add("filter-tab")
    filterTab.innerHTML = `<span>Filter</span>`
    mapContainer.appendChild(filterTab)

    // Add the map container to the modal (now outside the modal content)
    modalContainer.appendChild(mapContainer)

    // Initialize the map
    initializeMap(mapVisualization.querySelector(".map-canvas"), contentUrl)

    // Create a filter badge container for the modal header
    const modalHeader = modalContainer.querySelector(".modal-header");
    if (modalHeader) {
      const filterBadgeContainer = document.createElement("div");
      filterBadgeContainer.classList.add("filter-badge-container");

      // Select the header-title element to insert the filter badges inside
      const headerTitle = modalHeader.querySelector(".header-title");

      // If header-title exists, append the filter badge container to it
      if (headerTitle) {
        headerTitle.appendChild(filterBadgeContainer);
      } else {
        // If header-title doesn't exist, append the filter badge container directly to modalHeader
        modalHeader.appendChild(filterBadgeContainer);
      }
    }


    // Set up event listeners
    setupFilterEventListeners(filterSection, mapVisualization, contentUrl, modalContainer)

    // Add click event to the filter tab to toggle the panel
    filterTab.addEventListener("click", (e) => {
      e.stopPropagation()
      mapContainer.classList.toggle("active")
    })

    return mapContainer
  }

  // Initialize the map visualization
  function initializeMap(mapCanvas, baseContentUrl) {
    // Clear any existing content
    mapCanvas.innerHTML = "";

    // Create a simple world map visualization (placeholder)
    const worldMap = document.createElement("div");
    worldMap.classList.add("world-map");

    // Create a map container inside the world map element
    const mapContainer = document.createElement("div");
    mapContainer.id = "map"; // This ID will be used to reference the map container
    mapContainer.style.width = "100%";
    mapContainer.style.height = "100%"; // Set the height of the map

    // Append the map container to the world map
    worldMap.appendChild(mapContainer);

    // Append the worldMap element to the mapCanvas
    mapCanvas.appendChild(worldMap);

    // Delay the map initialization to give the DOM time to update
    setTimeout(function() {
      // Ensure that the map container is now present in the DOM
      const mapElement = document.getElementById("map");
      if (mapElement) {
        // Initialize the Leaflet map
        // Initialize the map
        const map = L.map("map").setView([0, 0], 2); // Set the center and zoom level

        // Use a dark tile layer
        L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png", {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attributions">CartoDB</a>',
        }).addTo(map);


        // Optional: Add a marker or popup to demonstrate functionality
        // const marker = L.marker([51.5, -0.09]).addTo(map);
        // marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
      } else {
        console.error("Map container not found!");
      }

      // Hide loading indicator
      const loadingIndicator = mapCanvas.parentElement.querySelector(".map-loading");
      if (loadingIndicator) {
        loadingIndicator.style.display = "none";
      }
    }, 100); // Delay by 100ms to ensure DOM updates
  }


  // Set up event listeners for the filters
  function setupFilterEventListeners(filterSection, mapVisualization, baseContentUrl, modalContainer) {
    // Get all checkboxes
    const checkboxes = filterSection.querySelectorAll('input[type="checkbox"]')

    // Add change event listener to each checkbox
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        updateContentBasedOnFilters(checkboxes, mapVisualization, baseContentUrl, modalContainer)
      })
    })

    // Clear filters button
    const clearButton = filterSection.querySelector("#clear-filters")
    if (clearButton) {
      clearButton.addEventListener("click", () => {
        checkboxes.forEach((cb) => {
          cb.checked = false
        })
        updateContentBasedOnFilters(checkboxes, mapVisualization, baseContentUrl, modalContainer)
      })
    }

    // Toggle filters visibility
    const toggleButton = filterSection.querySelector("#toggle-filters")
    if (toggleButton) {
      toggleButton.addEventListener("click", () => {
        const filterGroups = filterSection.querySelector(".filter-groups")
        if (filterGroups) {
          const isVisible = filterGroups.style.display !== "none"
          filterGroups.style.display = isVisible ? "none" : "block"
          toggleButton.textContent = isVisible ? "Show Filters" : "Hide Filters"
        }
      })
    }

    // Category headers toggle their section
    const categoryHeaders = filterSection.querySelectorAll(".category-header")
    categoryHeaders.forEach((header) => {
      header.addEventListener("click", () => {
        const filtersContainer = header.nextElementSibling
        if (filtersContainer && filtersContainer.classList.contains("filters-container")) {
          const isVisible = filtersContainer.style.display !== "none"
          filtersContainer.style.display = isVisible ? "none" : "flex"
          header.classList.toggle("collapsed", isVisible)
        }
      })
    })
  }

  // Update the content based on selected filters
  function updateContentBasedOnFilters(checkboxes, mapVisualization, baseContentUrl, modalContainer) {
    // Get all selected filter codes
    const selectedFilters = Array.from(checkboxes)
      .filter((cb) => cb.checked)
      .map((cb) => cb.dataset.filterCode)

    // Update the map visualization
    updateMapHighlights(mapVisualization.querySelector(".map-canvas"), selectedFilters)

    // Update the filter badges in the modal header
    updateFilterBadges(modalContainer, selectedFilters)

    // If we have a modal with an iframe, update its content
    if (modalContainer) {
      const iframe = modalContainer.querySelector("iframe")
      if (iframe) {
        // Build the new URL with filter parameters
        let newUrl = baseContentUrl
        if (selectedFilters.length > 0) {
          const separator = baseContentUrl.includes("?") ? "&" : "?"
          newUrl = `${baseContentUrl}${separator}filters=${selectedFilters.join(",")}`
        }

        // Only update if the URL has changed
        if (iframe.src !== newUrl) {
          iframe.src = newUrl
        }
      }
    }
  }

  // Update filter badges in the modal header
  function updateFilterBadges(modalContainer, selectedFilters) {
    const filterBadgeContainer = modalContainer.querySelector(".filter-badge-container")
    if (!filterBadgeContainer) return

    // Clear existing badges
    filterBadgeContainer.innerHTML = ""

    // If no filters selected, show a placeholder or nothing
    if (selectedFilters.length === 0) {
      filterBadgeContainer.innerHTML = '<span class="no-filters">No filters applied</span>'
      return
    }

    // Add badges for each selected filter
    selectedFilters.forEach((code) => {
      const badge = document.createElement("span")
      badge.classList.add("filter-badge")
      badge.textContent = window.originsDescriptions[code] || code
      badge.dataset.filterCode = code

      // Add a remove button to each badge
      const removeBtn = document.createElement("span")
      removeBtn.classList.add("remove-filter")
      removeBtn.innerHTML = "×"
      removeBtn.addEventListener("click", (e) => {
        e.stopPropagation()
        // Find and uncheck the corresponding checkbox
        const checkbox = modalContainer.querySelector(`input[data-filter-code="${code}"]`)
        if (checkbox) {
          checkbox.checked = false
          // Trigger the change event
          const event = new Event("change")
          checkbox.dispatchEvent(event)
        }
      })

      badge.appendChild(removeBtn)
      filterBadgeContainer.appendChild(badge)
    })
  }

  // Update map highlights based on selected filters
  function updateMapHighlights(mapCanvas, selectedFilters) {
    // This is a placeholder for actual map highlighting logic
    // In a real implementation, you would highlight regions on the map
    // based on the selected filters

    // For now, we'll just update a text element in the SVG
    const mapText = mapCanvas.querySelector(".map-text")
    if (mapText) {
      if (selectedFilters.length > 0) {
        mapText.textContent = `Showing: ${selectedFilters.length} selected regions`
      } else {
        mapText.textContent = "Interactive World Map"
      }
    }

    const mapSubtext = mapCanvas.querySelector(".map-subtext")
    if (mapSubtext) {
      if (selectedFilters.length > 0) {
        const filterNames = selectedFilters.map((code) => window.originsDescriptions[code] || code)
        mapSubtext.textContent =
          filterNames.join(", ").substring(0, 50) + (filterNames.join(", ").length > 50 ? "..." : "")
      } else {
        mapSubtext.textContent = "Select filters to highlight regions"
      }
    }
  }

  // Initialize the infinite canvas if it doesn't exist
  function initInfiniteCanvas() {
    if (!document.getElementById("infinite-canvas-container")) {
      // Create the infinite canvas container
      const canvasContainer = document.createElement("div")
      canvasContainer.id = "infinite-canvas-container"
      canvasContainer.classList.add("infinite-canvas-container")
      canvasContainer.dataset.zoomLevel = "1" // Initialize zoom level

      // Move all body children to the canvas container
      while (document.body.firstChild) {
        canvasContainer.appendChild(document.body.firstChild)
      }

      // Create the viewport
      const viewport = document.createElement("div")
      viewport.id = "infinite-canvas-viewport"
      viewport.classList.add("infinite-canvas-viewport")

      // Add the canvas container to the viewport
      viewport.appendChild(canvasContainer)

      // Add the viewport to the body
      document.body.appendChild(viewport)

      // Set initial canvas size (much larger than viewport)
      canvasContainer.style.width = "5000px"
      canvasContainer.style.height = "5000px"

      // Center the canvas initially
      viewport.scrollLeft = (canvasContainer.offsetWidth - viewport.offsetWidth) / 2
      viewport.scrollTop = (canvasContainer.offsetHeight - viewport.offsetHeight) / 2

      // Add wheel event for zooming with mouse wheel
      viewport.addEventListener(
        "wheel",
        (e) => {
          // Check if Ctrl key is pressed for zoom
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault() // Prevent default zoom behavior

            // Get mouse position relative to the document
            const mouseX = e.clientX + viewport.scrollLeft
            const mouseY = e.clientY + viewport.scrollTop

            // Get current zoom level
            const currentZoom = Number.parseFloat(canvasContainer.dataset.zoomLevel || "1")

            // Determine zoom direction and amount
            const delta = e.deltaY > 0 ? -0.1 : 0.1

            // Calculate new zoom level with limits
            const newZoom = Math.max(0.2, Math.min(3, currentZoom + delta))

            // If zoom level hasn't changed, exit
            if (newZoom === currentZoom) return

            // Calculate the point in the document under the mouse before zooming
            const pointXBeforeZoom = mouseX / currentZoom
            const pointYBeforeZoom = mouseY / currentZoom

            // Apply the new zoom level
            canvasContainer.style.transform = `scale(${newZoom})`
            canvasContainer.style.transformOrigin = "0 0"
            canvasContainer.dataset.zoomLevel = newZoom.toString()

            // Update zoom indicator if it exists
            const resetZoomBtn = document.getElementById("resetZoomBtn")
            if (resetZoomBtn) {
              resetZoomBtn.innerHTML = `${Math.round(newZoom * 100)}%`
            }

            // Calculate the new position of the point after zooming
            const pointXAfterZoom = pointXBeforeZoom * newZoom
            const pointYAfterZoom = pointYBeforeZoom * newZoom

            // Adjust scroll position to keep the point under the mouse
            viewport.scrollLeft = pointXAfterZoom - e.clientX
            viewport.scrollTop = pointYAfterZoom - e.clientY
          }
        },
        { passive: false },
      )

      // Create zoom controls only when infinite canvas is initialized
      createZoomControls()
    }

    return {
      viewport: document.getElementById("infinite-canvas-viewport"),
      container: document.getElementById("infinite-canvas-container"),
    }
  }

  // Add this function after the initInfiniteCanvas function
  function closeInfiniteCanvas() {
    const viewport = document.getElementById("infinite-canvas-viewport")
    const container = document.getElementById("infinite-canvas-container")

    if (viewport && container) {
      // Get all modals and move them to body (to preserve them)
      const modals = container.querySelectorAll(".modal-container")
      modals.forEach((modal) => {
        // Hide modals when closing infinite canvas
        modal.style.display = "none"
        document.body.appendChild(modal)
      })

      // Move all other children back to body
      while (container.firstChild) {
        if (!container.firstChild.classList || !container.firstChild.classList.contains("modal-container")) {
          document.body.appendChild(container.firstChild)
        } else {
          container.removeChild(container.firstChild)
        }
      }

      // Remove zoom controls if they exist
      const zoomControls = document.getElementById("zoomControls")
      if (zoomControls) {
        zoomControls.remove()
      }

      // Remove the viewport (which contains the container)
      viewport.remove()
    }
  }

  // Function to create zoom controls
  function createZoomControls() {
    const controlsDiv = document.getElementById("controls")

    if (controlsDiv && !document.getElementById("zoomInBtn")) {
      // Create zoom controls container
      const zoomControlsContainer = document.createElement("div")
      zoomControlsContainer.id = "zoomControls"
      zoomControlsContainer.className = "zoom-controls"

      // Create zoom in button
      const zoomInBtn = document.createElement("button")
      zoomInBtn.id = "zoomInBtn"
      zoomInBtn.className = "btn-fullscreen btn-zoom"
      zoomInBtn.innerHTML = "+"
      zoomInBtn.title = "Zoom In"

      // Create zoom out button
      const zoomOutBtn = document.createElement("button")
      zoomOutBtn.id = "zoomOutBtn"
      zoomOutBtn.className = "btn-fullscreen btn-zoom"
      zoomOutBtn.innerHTML = "−" // Using minus sign, not hyphen
      zoomOutBtn.title = "Zoom Out"

      // Create reset zoom button
      const resetZoomBtn = document.createElement("button")
      resetZoomBtn.id = "resetZoomBtn"
      resetZoomBtn.className = "btn-fullscreen btn-zoom"
      resetZoomBtn.innerHTML = "100%"
      resetZoomBtn.title = "Reset Zoom"

      // Add zoom controls to the container
      zoomControlsContainer.appendChild(zoomInBtn)
      zoomControlsContainer.appendChild(resetZoomBtn)
      zoomControlsContainer.appendChild(zoomOutBtn)

      // Add zoom controls container to the controls div
      controlsDiv.appendChild(zoomControlsContainer)

      // Add event listeners for zoom controls
      zoomInBtn.addEventListener("click", () => zoomCanvas(0.2))
      zoomOutBtn.addEventListener("click", () => zoomCanvas(-0.2))
      resetZoomBtn.addEventListener("click", () => resetZoom())
    }
  }

  // Dummy declaration for createModalMap to resolve the error.
  // In a real scenario, this would be an import or a proper function definition.
  //let createModalMap

  function openModal(contentUrl, itemName) {
    // Initialize or get the infinite canvas
    const canvas = initInfiniteCanvas()

    // Get the active level from the global context if it exists
    let activeLevel2 = null
    // Try multiple ways to get the active level
    if (window.activeLevel2) {
      activeLevel2 = window.activeLevel2
    } else if (typeof window.getActiveLevel === "function") {
      // If there's a getActiveLevel function, use it
      activeLevel2 = window.getActiveLevel()
    } else if (document.querySelector(".active-level")) {
      // Try to get it from DOM if there's an element with class 'active-level'
      activeLevel2 = document.querySelector(".active-level").textContent.trim()
    }

    console.log("Active Level Check:", {
      "window.activeLevel2": window.activeLevel2,
      "resolved activeLevel2": activeLevel2,
    })

    // Create a new modal container dynamically
    const modalContainer = document.createElement("div")
    modalContainer.classList.add("modal-container")
    modalContainer.style.position = "absolute" // Changed from fixed to absolute for infinite canvas

    // Position in the center of the current viewport
    const viewportRect = canvas.viewport.getBoundingClientRect()
    const scrollLeft = canvas.viewport.scrollLeft
    const scrollTop = canvas.viewport.scrollTop

    // Get current zoom level
    const zoomLevel = Number.parseFloat(canvas.container.dataset.zoomLevel || "1")

    // Calculate position accounting for zoom
    modalContainer.style.left = `${scrollLeft / zoomLevel + viewportRect.width / (2 * zoomLevel)}px`
    modalContainer.style.top = `${scrollTop / zoomLevel + viewportRect.height / (2 * zoomLevel)}px`
    modalContainer.style.transform = "translate(0%, -50%)" // Center the modal

    modalContainer.style.zIndex = 10000000 + document.querySelectorAll(".modal-container").length // Ensure unique stacking order for each modal
    modalContainer.style.display = "none" // Hide initially
    modalContainer.style.opacity = "0" // Start with invisible modal

    // Set initial dimensions - we'll adjust these based on content
    modalContainer.style.width = "auto"
    modalContainer.style.height = "auto"
    modalContainer.style.minWidth = "400px"
    modalContainer.style.minHeight = "200px"

    // Store original dimensions for minimize/maximize functionality
    modalContainer.dataset.originalWidth = "auto"
    modalContainer.dataset.originalHeight = "auto"
    modalContainer.dataset.isMaximized = "false"

    // Create the modal content container
    const modalContent = document.createElement("div")
    modalContent.classList.add("modal-content")

    // Create a header for the modal
    const modalHeader = document.createElement("div")
    modalHeader.classList.add("modal-header")

    // Create the header text element
    const headerText = activeLevel2 ? `${activeLevel2} / ${itemName}` : itemName
    const headerTitle = document.createElement("div")
    headerTitle.classList.add("header-title")
    headerTitle.textContent = headerText

    // Create the maximize/minimize button
    const toggleSizeBtn = document.createElement("button")
    toggleSizeBtn.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="12" height="12" stroke="white" fill="none"/>
          </svg>
      `
    toggleSizeBtn.classList.add("toggle-size-btn")
    toggleSizeBtn.addEventListener("click", () => {
      const isMaximized = modalContainer.dataset.isMaximized === "true"
      const zoomLevel = Number.parseFloat(canvas.container.dataset.zoomLevel || "1")

      if (isMaximized) {
        // Restore original size
        modalContainer.style.width = modalContainer.dataset.originalWidth
        modalContainer.style.height = modalContainer.dataset.originalHeight
        modalContainer.style.top = modalContainer.dataset.originalTop
        modalContainer.style.left = modalContainer.dataset.originalLeft
        modalContainer.style.transform = modalContainer.dataset.originalTransform

        // Update button icon to maximize
        toggleSizeBtn.innerHTML = `
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="12" height="12" stroke="white" fill="none"/>
                  </svg>
              `

        modalContainer.dataset.isMaximized = "false"
      } else {
        // Save current dimensions
        modalContainer.dataset.originalWidth = modalContainer.style.width || "auto"
        modalContainer.dataset.originalHeight = modalContainer.style.height || "auto"
        modalContainer.dataset.originalTop = modalContainer.style.top
        modalContainer.dataset.originalLeft = modalContainer.style.left
        modalContainer.dataset.originalTransform = modalContainer.style.transform

        // Get current viewport position
        const viewportRect = canvas.viewport.getBoundingClientRect()
        const scrollLeft = canvas.viewport.scrollLeft
        const scrollTop = canvas.viewport.scrollTop

        // Maximize to fill viewport, accounting for zoom
        modalContainer.style.width = `${viewportRect.width / zoomLevel}px`
        modalContainer.style.height = `${viewportRect.height / zoomLevel}px`
        modalContainer.style.top = `${scrollTop / zoomLevel}px`
        modalContainer.style.left = `${scrollLeft / zoomLevel}px`
        modalContainer.style.transform = "none"

        // Update button icon to minimize
        toggleSizeBtn.innerHTML = `
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="4" width="8" height="8" stroke="white" fill="none"/>
                  </svg>
              `

        modalContainer.dataset.isMaximized = "true"
      }
    })

    // Create the close button
    const closeModalBtn = document.createElement("button")
    closeModalBtn.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.00112 13.9999L14 2.00098" stroke="white"/>
            <path d="M13.9999 13.9999L2.00098 2.00098" stroke="white"/>
          </svg>
      `
    closeModalBtn.classList.add("close-modal-btn")
    closeModalBtn.addEventListener("click", () => {
      modalContainer.style.display = "none" // Hide the modal when close button is clicked
      modalContainer.style.opacity = "0" // Make it invisible
    })

    // Create button container for controls
    const buttonContainer = document.createElement("div")
    buttonContainer.classList.add("modal-buttons")
    buttonContainer.appendChild(toggleSizeBtn)
    buttonContainer.appendChild(closeModalBtn)

    // Append the header title and buttons into the modal header
    modalHeader.appendChild(headerTitle)
    modalHeader.appendChild(buttonContainer)

    // Append the header to the modal content
    modalContent.appendChild(modalHeader)

    // Create the iframe to load dynamic content
    const modalIframe = document.createElement("iframe")
    modalIframe.src = contentUrl
    modalIframe.width = "100%"
    modalIframe.height = "100%" // Adjust height as needed
    modalContent.appendChild(modalIframe)

    // Create a progress bar container
    const progressBar = document.createElement("div")
    progressBar.classList.add("progress-bar")
    modalContent.appendChild(progressBar)

    // Create a fallback message container (hidden by default)
    const fallbackMessage = document.createElement("div")
    fallbackMessage.classList.add("fallback-message")
    fallbackMessage.textContent = "Error: Data retrieval failed. No records found."
    fallbackMessage.style.display = "none"
    modalContent.appendChild(fallbackMessage)

    // Show progress bar & listen for iframe events
    modalIframe.style.display = "none" // Hide iframe initially
    modalContent.appendChild(modalIframe)

    // When the iframe starts loading, show progress
    modalIframe.addEventListener("loadstart", () => {
      progressBar.style.width = "0%"
      progressBar.style.display = "block"
    })

    // As the iframe loads, simulate progress (you can add a more complex loader here)
    const progressInterval = setInterval(() => {
      const currentWidth = Number.parseFloat(progressBar.style.width) || 0
      if (currentWidth < 90) {
        progressBar.style.width = `${currentWidth + 5}%`
      }
    }, 200)

    // When the iframe fully loads
    modalIframe.addEventListener("load", () => {
      clearInterval(progressInterval)
      progressBar.style.width = "100%"

      setTimeout(() => {
        progressBar.style.display = "none" // Hide progress bar after it finishes
        modalIframe.style.display = "block"

        // Try to get content dimensions and resize modal accordingly
        try {
          // First attempt: try to access iframe content directly (same origin)
          const iframeDoc = modalIframe.contentDocument || modalIframe.contentWindow.document
          const bodyElement = iframeDoc.body

          // Set modal size based on content with some padding
          const contentWidth = Math.max(bodyElement.scrollWidth, bodyElement.offsetWidth)
          const contentHeight = Math.max(bodyElement.scrollHeight, bodyElement.offsetHeight)

          // Apply size constraints (min/max) and set the modal size
          const zoomLevel = Number.parseFloat(canvas.container.dataset.zoomLevel || "1")
          const maxWidth = (canvas.viewport.offsetWidth * 0.9) / zoomLevel
          const maxHeight = (canvas.viewport.offsetHeight * 0.9) / zoomLevel

          modalContainer.style.width = `${Math.min(Math.max(contentWidth + 40, 400), maxWidth)}px`
          modalContainer.style.height = `${Math.min(Math.max(contentHeight + 60, 300), maxHeight)}px`

          // Center the modal if it still has the transform
          if (modalContainer.style.transform.includes("translate")) {
            const viewportRect = canvas.viewport.getBoundingClientRect()
            const scrollLeft = canvas.viewport.scrollLeft
            const scrollTop = canvas.viewport.scrollTop

            modalContainer.style.left = `${scrollLeft / zoomLevel + viewportRect.width / (2 * zoomLevel)}px`
            modalContainer.style.top = `${scrollTop / zoomLevel + viewportRect.height / (2 * zoomLevel)}px`
          }
        } catch (e) {
          // If we can't access the iframe content (cross-origin), use default size
          console.log("Could not determine content size (likely cross-origin). Using default size.")
        }
      }, 500)
    })

    // If the iframe fails to load
    modalIframe.addEventListener("error", () => {
      clearInterval(progressInterval)
      progressBar.style.display = "none"
      fallbackMessage.style.display = "block"
    })

    // Timeout as a backup check (5s)
    const fallbackTimeout = setTimeout(() => {
      if (!modalIframe.contentWindow || modalIframe.contentWindow.location.href === "about:blank") {
        progressBar.style.display = "none"
        fallbackMessage.style.display = "block"
      }
    }, 5000)

    // Append the modal content to the container
    modalContainer.appendChild(modalContent)

    // Create the resize handle
    const resizeHandle = document.createElement("div")
    resizeHandle.classList.add("resize-handle")
    modalContainer.appendChild(resizeHandle)

    // Create and add the map with filters
    if (typeof createModalMap === "function") {
      createModalMap(modalContainer, contentUrl, itemName)
    }

    // Append the modal to the infinite canvas container
    canvas.container.appendChild(modalContainer)

    // Fade-in effect for the modal
    setTimeout(() => {
      modalContainer.style.display = "block"
      modalContainer.style.opacity = 1
    }, 50)

    // Function to bring modal to front
    function bringToFront(modal) {
      // Get all modals
      const allModals = document.querySelectorAll(".modal-container")

      // Find the highest z-index
      let highestZIndex = 1000
      allModals.forEach((m) => {
        const zIndex = Number.parseInt(m.style.zIndex || 1000)
        if (zIndex > highestZIndex) highestZIndex = zIndex
      })

      // Set this modal's z-index higher than the highest
      modal.style.zIndex = highestZIndex + 1
    }

    // Add click event to bring modal to front
    modalContainer.addEventListener("mousedown", () => {
      bringToFront(modalContainer)
    })

    // Add drag functionality for the modal with auto-scrolling
    let isDragging = false
    let offsetX = 0,
      offsetY = 0
    let autoScrollInterval = null
    let scrollSpeed = { x: 0, y: 0 }
    const scrollThreshold = 50 // Distance from edge to start scrolling
    const maxScrollSpeed = 15 // Maximum scroll speed in pixels per frame

    modalHeader.addEventListener("mousedown", (e) => {
      // Don't start dragging if clicking on buttons
      if (e.target.closest(".close-modal-btn") || e.target.closest(".toggle-size-btn")) {
        return
      }

      isDragging = true

      // Calculate offset relative to the modal, accounting for zoom
      const zoomLevel = Number.parseFloat(canvas.container.dataset.zoomLevel || "1")
      const modalRect = modalContainer.getBoundingClientRect()
      offsetX = e.clientX / zoomLevel - modalRect.left / zoomLevel
      offsetY = e.clientY / zoomLevel - modalRect.top / zoomLevel

      modalContainer.classList.add("no-select") // Add no-select class during dragging

      // Bring to front when starting to drag
      bringToFront(modalContainer)

      // Clear any existing auto-scroll
      if (autoScrollInterval) {
        clearInterval(autoScrollInterval)
        autoScrollInterval = null
      }

      // Start auto-scroll interval
      autoScrollInterval = setInterval(() => {
        if (scrollSpeed.x !== 0 || scrollSpeed.y !== 0) {
          canvas.viewport.scrollLeft += scrollSpeed.x
          canvas.viewport.scrollTop += scrollSpeed.y

          // Update modal position to follow the scroll, accounting for zoom
          if (isDragging) {
            const zoomLevel = Number.parseFloat(canvas.container.dataset.zoomLevel || "1")
            const newLeft = Number.parseInt(modalContainer.style.left) + scrollSpeed.x / zoomLevel
            const newTop = Number.parseInt(modalContainer.style.top) + scrollSpeed.y / zoomLevel
            modalContainer.style.left = `${newLeft}px`
            modalContainer.style.top = `${newTop}px`
          }
        }
      }, 16) // ~60fps
    })

    document.addEventListener("mousemove", (e) => {
      if (!isDragging) return

      // Get current zoom level
      const zoomLevel = Number.parseFloat(canvas.container.dataset.zoomLevel || "1")

      // Calculate new position, accounting for zoom
      const viewportRect = canvas.viewport.getBoundingClientRect()
      const newX = (e.clientX - viewportRect.left) / zoomLevel + canvas.viewport.scrollLeft / zoomLevel - offsetX
      const newY = (e.clientY - viewportRect.top) / zoomLevel + canvas.viewport.scrollTop / zoomLevel - offsetY

      // Update modal position
      modalContainer.style.left = `${newX}px`
      modalContainer.style.top = `${newY}px`
      modalContainer.style.transform = "none" // Remove the centering transform when dragging

      // Check if we need to auto-scroll (near viewport edges)
      const distanceFromRight = viewportRect.right - e.clientX
      const distanceFromLeft = e.clientX - viewportRect.left
      const distanceFromBottom = viewportRect.bottom - e.clientY
      const distanceFromTop = e.clientY - viewportRect.top

      // Calculate scroll speeds based on distance from edges
      if (distanceFromRight < scrollThreshold) {
        scrollSpeed.x = Math.min(maxScrollSpeed, maxScrollSpeed * (1 - distanceFromRight / scrollThreshold))
      } else if (distanceFromLeft < scrollThreshold) {
        scrollSpeed.x = -Math.min(maxScrollSpeed, maxScrollSpeed * (1 - distanceFromLeft / scrollThreshold))
      } else {
        scrollSpeed.x = 0
      }

      if (distanceFromBottom < scrollThreshold) {
        scrollSpeed.y = Math.min(maxScrollSpeed, maxScrollSpeed * (1 - distanceFromBottom / scrollThreshold))
      } else if (distanceFromTop < scrollThreshold) {
        scrollSpeed.y = -Math.min(maxScrollSpeed, maxScrollSpeed * (1 - distanceFromTop / scrollThreshold))
      } else {
        scrollSpeed.y = 0
      }

      // Check if we need to expand the canvas
      const canvasContainer = canvas.container
      const modalRight = newX + modalContainer.offsetWidth
      const modalBottom = newY + modalContainer.offsetHeight
      const canvasWidth = Number.parseInt(canvasContainer.style.width)
      const canvasHeight = Number.parseInt(canvasContainer.style.height)

      // Expand canvas if modal is getting close to the edge
      const expandMargin = 200 // Expand when within 200px of the edge
      if (modalRight > canvasWidth - expandMargin) {
        canvasContainer.style.width = `${canvasWidth + 1000}px`
      }
      if (modalBottom > canvasHeight - expandMargin) {
        canvasContainer.style.height = `${canvasHeight + 1000}px`
      }
    })

    document.addEventListener("mouseup", () => {
      if (isDragging) {
        isDragging = false
        modalContainer.classList.remove("no-select") // Remove no-select class after dragging

        // Stop auto-scrolling
        if (autoScrollInterval) {
          clearInterval(autoScrollInterval)
          autoScrollInterval = null
        }
        scrollSpeed = { x: 0, y: 0 }
      }
    })

    let isResizing = false
    let resizeStartX, resizeStartY, resizeStartWidth, resizeStartHeight

    // Start resizing when mouse is pressed on the resize handle
    resizeHandle.addEventListener("mousedown", (e) => {
      isResizing = true

      // Get the mouse position relative to the viewport, accounting for zoom
      const zoomLevel = Number.parseFloat(canvas.container.dataset.zoomLevel || "1")
      const viewportRect = canvas.viewport.getBoundingClientRect()
      resizeStartX = (e.clientX - viewportRect.left) / zoomLevel + canvas.viewport.scrollLeft / zoomLevel
      resizeStartY = (e.clientY - viewportRect.top) / zoomLevel + canvas.viewport.scrollTop / zoomLevel

      resizeStartWidth = modalContainer.offsetWidth // Current modal size
      resizeStartHeight = modalContainer.offsetHeight

      modalContainer.classList.add("no-select") // Disable text selection during resizing
      document.body.style.userSelect = "none" // Disable text selection globally

      // Bring to front when starting to resize
      bringToFront(modalContainer)

      // Prevent the event from bubbling up
      e.stopPropagation()

      // Start auto-scroll for resizing too
      if (autoScrollInterval) {
        clearInterval(autoScrollInterval)
      }

      autoScrollInterval = setInterval(() => {
        if (scrollSpeed.x !== 0 || scrollSpeed.y !== 0) {
          canvas.viewport.scrollLeft += scrollSpeed.x
          canvas.viewport.scrollTop += scrollSpeed.y
        }
      }, 16) // ~60fps
    })

    // Resize the modal as the mouse moves
    document.addEventListener("mousemove", (e) => {
      if (!isResizing) return

      // Get current mouse position relative to the viewport, accounting for zoom
      const zoomLevel = Number.parseFloat(canvas.container.dataset.zoomLevel || "1")
      const viewportRect = canvas.viewport.getBoundingClientRect()
      const currentX = (e.clientX - viewportRect.left) / zoomLevel + canvas.viewport.scrollLeft / zoomLevel
      const currentY = (e.clientY - viewportRect.top) / zoomLevel + canvas.viewport.scrollTop / zoomLevel

      const widthDiff = currentX - resizeStartX // Calculate how much the mouse moved in X
      const heightDiff = currentY - resizeStartY // Calculate how much the mouse moved in Y

      // Only update size if there is actual movement
      if (widthDiff !== 0 || heightDiff !== 0) {
        modalContainer.style.width = `${Math.max(400, resizeStartWidth + widthDiff)}px` // Update width
        modalContainer.style.height = `${Math.max(300, resizeStartHeight + heightDiff)}px` // Update height
      }

      // Check if we need to auto-scroll (near viewport edges)
      const distanceFromRight = viewportRect.right - e.clientX
      const distanceFromBottom = viewportRect.bottom - e.clientY

      // Calculate scroll speeds based on distance from edges (only for right and bottom during resize)
      if (distanceFromRight < scrollThreshold) {
        scrollSpeed.x = Math.min(maxScrollSpeed, maxScrollSpeed * (1 - distanceFromRight / scrollThreshold))
      } else {
        scrollSpeed.x = 0
      }

      if (distanceFromBottom < scrollThreshold) {
        scrollSpeed.y = Math.min(maxScrollSpeed, maxScrollSpeed * (1 - distanceFromBottom / scrollThreshold))
      } else {
        scrollSpeed.y = 0
      }

      // Check if we need to expand the canvas
      const canvasContainer = canvas.container
      const modalRight = Number.parseInt(modalContainer.style.left) + modalContainer.offsetWidth
      const modalBottom = Number.parseInt(modalContainer.style.top) + modalContainer.offsetHeight
      const canvasWidth = Number.parseInt(canvasContainer.style.width)
      const canvasHeight = Number.parseInt(canvasContainer.style.height)

      // Expand canvas if modal is getting close to the edge
      const expandMargin = 200 // Expand when within 200px of the edge
      if (modalRight > canvasWidth - expandMargin) {
        canvasContainer.style.width = `${canvasWidth + 1000}px`
      }
      if (modalBottom > canvasHeight - expandMargin) {
        canvasContainer.style.height = `${canvasHeight + 1000}px`
      }
    })

    // Stop resizing when mouse is released
    document.addEventListener("mouseup", () => {
      if (isResizing) {
        isResizing = false
        modalContainer.classList.remove("no-select") // Re-enable text selection
        document.body.style.userSelect = "" // Restore normal text selection

        // Stop auto-scrolling
        if (autoScrollInterval) {
          clearInterval(autoScrollInterval)
          autoScrollInterval = null
        }
        scrollSpeed = { x: 0, y: 0 }
      }
    })
  }

  // Function to zoom the canvas
  function zoomCanvas(zoomDelta) {
    const canvas = {
      viewport: document.getElementById("infinite-canvas-viewport"),
      container: document.getElementById("infinite-canvas-container"),
    }

    if (!canvas.container || !canvas.viewport) return

    // Get current zoom level
    const currentZoom = Number.parseFloat(canvas.container.dataset.zoomLevel || "1")

    // Calculate new zoom level with limits
    const newZoom = Math.max(0.2, Math.min(3, currentZoom + zoomDelta))

    // If zoom level hasn't changed, exit
    if (newZoom === currentZoom) return

    // Get the current viewport center position
    const viewportRect = canvas.viewport.getBoundingClientRect()
    const viewportCenterX = viewportRect.width / 2
    const viewportCenterY = viewportRect.height / 2

    // Get the scroll position before zooming
    const scrollLeftBefore = canvas.viewport.scrollLeft
    const scrollTopBefore = canvas.viewport.scrollTop

    // Calculate the point in the document that is currently centered in the viewport
    const documentCenterX = scrollLeftBefore + viewportCenterX
    const documentCenterY = scrollTopBefore + viewportCenterY

    // Apply the new zoom level
    canvas.container.style.transform = `scale(${newZoom})`
    canvas.container.style.transformOrigin = "0 0"
    canvas.container.dataset.zoomLevel = newZoom.toString()

    // Update zoom indicator if it exists
    const resetZoomBtn = document.getElementById("resetZoomBtn")
    if (resetZoomBtn) {
      resetZoomBtn.innerHTML = `${Math.round(newZoom * 100)}%`
    }

    // Calculate the new scroll position to keep the same point centered
    // We need to account for the scaling factor
    const newScrollLeft = (documentCenterX * newZoom) / currentZoom - viewportCenterX
    const newScrollTop = (documentCenterY * newZoom) / currentZoom - viewportCenterY

    // Apply the new scroll position
    canvas.viewport.scrollLeft = newScrollLeft
    canvas.viewport.scrollTop = newScrollTop
  }

  // Function to reset zoom to 100%
  function resetZoom() {
    const canvas = {
      viewport: document.getElementById("infinite-canvas-viewport"),
      container: document.getElementById("infinite-canvas-container"),
    }

    if (!canvas.container || !canvas.viewport) return

    // Get current zoom level
    const currentZoom = Number.parseFloat(canvas.container.dataset.zoomLevel || "1")

    // If already at 100%, exit
    if (currentZoom === 1) return

    // Get the current viewport center position
    const viewportRect = canvas.viewport.getBoundingClientRect()
    const viewportCenterX = viewportRect.width / 2
    const viewportCenterY = viewportRect.height / 2

    // Get the scroll position before zooming
    const scrollLeftBefore = canvas.viewport.scrollLeft
    const scrollTopBefore = canvas.viewport.scrollTop

    // Calculate the point in the document that is currently centered in the viewport
    const documentCenterX = scrollLeftBefore + viewportCenterX
    const documentCenterY = scrollTopBefore + viewportCenterY

    // Reset zoom to 100%
    canvas.container.style.transform = "scale(1)"
    canvas.container.style.transformOrigin = "0 0"
    canvas.container.dataset.zoomLevel = "1"

    // Update zoom indicator
    const resetZoomBtn = document.getElementById("resetZoomBtn")
    if (resetZoomBtn) {
      resetZoomBtn.innerHTML = "100%"
    }

    // Calculate the new scroll position to keep the same point centered
    const newScrollLeft = documentCenterX / currentZoom - viewportCenterX
    const newScrollTop = documentCenterY / currentZoom - viewportCenterY

    // Apply the new scroll position
    canvas.viewport.scrollLeft = newScrollLeft
    canvas.viewport.scrollTop = newScrollTop
  }

  // Declare the variables
  //let sendFlag = 0
  //let btn
  //let park_sec

  // Modify the toggleFeaturedCollections function to close infinite canvas when collections are closed
  function toggleFeaturedCollections(forceClose = null) {
    if (typeof sendFlag === "undefined" || typeof btn === "undefined" || typeof park_sec === "undefined") {
      console.error("sendFlag, btn, or park_sec is not properly initialized.")
      return
    }

    if (forceClose === true) {
      sendFlag = 0
      if (btn) {
        btn.classList.remove("active")
        btn.textContent = "Featured Collections"
      }
      if (park_sec) {
        park_sec.forEach((item) => item.classList.remove("active"))
      }

      // Close infinite canvas when collections are closed
      closeInfiniteCanvas()
    } else {
      sendFlag = 1
      if (btn) {
        btn.classList.add("active")
        btn.textContent = "Close Collections"
      }
      if (park_sec) {
        park_sec.forEach((item) => item.classList.add("active"))
      }
    }
  }

// Touch event variables for tracking gestures
let touchStartY = 0;
let touchStartX = 0;
let isTouching = false;
let touchTarget = null;

// Touch event handler for Level 2 menu
function handleTouchLevel2(event) {
  if (!isMenuVisible) return;
  
  switch(event.type) {
    case 'touchstart':
      isTouching = true;
      touchTarget = 'level2';
      touchStartY = event.touches[0].clientY;
      touchStartX = event.touches[0].clientX;
      event.preventDefault();
      break;
      
    case 'touchmove':
      if (!isTouching || touchTarget !== 'level2') return;
      event.preventDefault();
      
      const currentY = event.touches[0].clientY;
      const deltaY = touchStartY - currentY;
      
      // Adjust sensitivity for touch (you can modify this value)
      const sensitivity = 0.5;
      targetAngleOffset += deltaY * sensitivity;
      
      // Update the starting position for continuous movement
      touchStartY = currentY;
      
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(animateRotation);
      break;
      
    case 'touchend':
    case 'touchcancel':
      if (touchTarget === 'level2') {
        isTouching = false;
        touchTarget = null;
      }
      break;
  }
}

// Mobile interaction - Improved touch event handlers that allow clicking and scrolling
// Touch event variables for tracking gestures
let touchStartY = 0;
let touchStartX = 0;
let isTouching = false;
let touchTarget = null;
let isScrolling = false;
let touchMoveDistance = 0;
let touchStartTime = 0;

// Thresholds for gesture detection
const SCROLL_THRESHOLD = 10; // Minimum pixels moved before considering it a scroll
const TAP_TIME_THRESHOLD = 300; // Maximum time for a tap (in milliseconds)
const TAP_DISTANCE_THRESHOLD = 10; // Maximum distance moved for a tap

// Declare missing variables
let isMenuVisible = false; // Or initialize with the correct boolean value
let targetAngleOffset = 0;
let animationFrameId = null;
let targetAngleOffsetLevel3 = 0;

// Placeholder for the animateRotation function (replace with actual implementation)
function animateRotation() {
  // Your animation logic here
}

// Improved touch event handler for Level 2 menu
function handleTouchLevel2(event) {
  if (!isMenuVisible) return;
  
  switch(event.type) {
    case 'touchstart':
      isTouching = true;
      isScrolling = false;
      touchTarget = 'level2';
      touchMoveDistance = 0;
      touchStartTime = Date.now();
      touchStartY = event.touches[0].clientY;
      touchStartX = event.touches[0].clientX;
      // Don't prevent default here - let it through initially
      break;
      
    case 'touchmove':
      if (!isTouching || touchTarget !== 'level2') return;
      
      const currentY = event.touches[0].clientY;
      const currentX = event.touches[0].clientX;
      const deltaY = Math.abs(touchStartY - currentY);
      const deltaX = Math.abs(touchStartX - currentX);
      
      // Calculate total distance moved
      touchMoveDistance = Math.sqrt(deltaY * deltaY + deltaX * deltaX);
      
      // Only start scrolling if we've moved beyond the threshold
      if (!isScrolling && touchMoveDistance > SCROLL_THRESHOLD) {
        // Check if movement is more vertical than horizontal (for scrolling)
        if (deltaY > deltaX) {
          isScrolling = true;
          event.preventDefault(); // Now prevent default since we're scrolling
        }
      }
      
      // If we're scrolling, handle the rotation
      if (isScrolling) {
        event.preventDefault();
        const movementDelta = touchStartY - currentY;
        const sensitivity = 0.5;
        targetAngleOffset += movementDelta * sensitivity;
        touchStartY = currentY; // Update for continuous movement
        
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(animateRotation);
      }
      break;
      
    case 'touchend':
    case 'touchcancel':
      if (touchTarget === 'level2') {
        const touchDuration = Date.now() - touchStartTime;
        
        // If it was a short touch with minimal movement, it's likely a tap
        // Don't prevent the click event in this case
        if (!isScrolling && 
            touchDuration < TAP_TIME_THRESHOLD && 
            touchMoveDistance < TAP_DISTANCE_THRESHOLD) {
          // This was a tap - let the click event fire naturally
          // Don't call preventDefault()
        }
        
        isTouching = false;
        isScrolling = false;
        touchTarget = null;
        touchMoveDistance = 0;
      }
      break;
  }
}

// Improved touch event handler for Level 3 menu
function handleTouchLevel3(event) {
  if (!isMenuVisible) return;
  
  switch(event.type) {
    case 'touchstart':
      isTouching = true;
      isScrolling = false;
      touchTarget = 'level3';
      touchMoveDistance = 0;
      touchStartTime = Date.now();
      touchStartY = event.touches[0].clientY;
      touchStartX = event.touches[0].clientX;
      // Don't prevent default here - let it through initially
      break;
      
    case 'touchmove':
      if (!isTouching || touchTarget !== 'level3') return;
      
      const currentY = event.touches[0].clientY;
      const currentX = event.touches[0].clientX;
      const deltaY = Math.abs(touchStartY - currentY);
      const deltaX = Math.abs(touchStartX - currentX);
      
      // Calculate total distance moved
      touchMoveDistance = Math.sqrt(deltaY * deltaY + deltaX * deltaX);
      
      // Only start scrolling if we've moved beyond the threshold
      if (!isScrolling && touchMoveDistance > SCROLL_THRESHOLD) {
        // Check if movement is more vertical than horizontal (for scrolling)
        if (deltaY > deltaX) {
          isScrolling = true;
          event.preventDefault(); // Now prevent default since we're scrolling
          event.stopPropagation();
        }
      }
      
      // If we're scrolling, handle the rotation
      if (isScrolling) {
        event.preventDefault();
        event.stopPropagation();
        const movementDelta = touchStartY - currentY;
        const sensitivity = 0.5;
        targetAngleOffsetLevel3 += movementDelta * sensitivity;
        touchStartY = currentY; // Update for continuous movement
        
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(animateRotation);
      }
      break;
      
    case 'touchend':
    case 'touchcancel':
      if (touchTarget === 'level3') {
        const touchDuration = Date.now() - touchStartTime;
        
        // If it was a short touch with minimal movement, it's likely a tap
        if (!isScrolling && 
            touchDuration < TAP_TIME_THRESHOLD && 
            touchMoveDistance < TAP_DISTANCE_THRESHOLD) {
          // This was a tap - let the click event fire naturally
        }
        
        isTouching = false;
        isScrolling = false;
        touchTarget = null;
        touchMoveDistance = 0;
      }
      break;
  }
}

// Declare submenu and submenuLevel3
let submenu;
let submenuLevel3;

// For Level 2 menu (submenu)
if (typeof submenu !== 'undefined') {
    submenu.removeEventListener("touchstart", handleTouchLevel2);
    submenu.removeEventListener("touchmove", handleTouchLevel2);
    submenu.removeEventListener("touchend", handleTouchLevel2);
    submenu.removeEventListener("touchcancel", handleTouchLevel2);
}
submenu = document.getElementById('submenu'); // Or however you get your submenu element
submenu.addEventListener("touchstart", handleTouchLevel2, { passive: false });
submenu.addEventListener("touchmove", handleTouchLevel2, { passive: false });
submenu.addEventListener("touchend", handleTouchLevel2, { passive: false });
submenu.addEventListener("touchcancel", handleTouchLevel2, { passive: false });

// For Level 3 menu (submenuLevel3)
if (typeof submenuLevel3 !== 'undefined') {
    submenuLevel3.removeEventListener("touchstart", handleTouchLevel3);
    submenuLevel3.removeEventListener("touchmove", handleTouchLevel3);
    submenuLevel3.removeEventListener("touchend", handleTouchLevel3);
    submenuLevel3.removeEventListener("touchcancel", handleTouchLevel3);
}
submenuLevel3 = document.getElementById('submenuLevel3'); // Or however you get your submenuLevel3 element
submenuLevel3.addEventListener("touchstart", handleTouchLevel3, { passive: false });
submenuLevel3.addEventListener("touchmove", handleTouchLevel3, { passive: false });
submenuLevel3.addEventListener("touchend", handleTouchLevel3, { passive: false });
submenuLevel3.addEventListener("touchcancel", handleTouchLevel3, { passive: false });

