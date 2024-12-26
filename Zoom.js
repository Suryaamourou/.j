        // Probleme de Zoom sur telephone
        (function autoZoomOut() {
            document.addEventListener("DOMContentLoaded", function () {
                // Vérifie si l'échelle est supportée et ajuste automatiquement
                const scale = 0.8; // Ajustez cette valeur selon vos besoins
                const viewportMeta = document.querySelector("meta[name=viewport]");

                if (viewportMeta) {
                    viewportMeta.setAttribute(
                        "content",
                        `width=device-width, initial-scale=${scale}, maximum-scale=${scale}, minimum-scale=${scale}`
                    );
                } else {
                    const meta = document.createElement("meta");
                    meta.name = "viewport";
                    meta.content = `width=device-width, initial-scale=${scale}, maximum-scale=${scale}, minimum-scale=${scale}`;
                    document.head.appendChild(meta);
                }
            });
        })();