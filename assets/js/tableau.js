function initViz() {
            var canning = document.getElementById("canning"),
                url = "https://public.tableau.com/views/Disposition-1/Canning?:language=en&:display_count=y&publish=yes&:origin=viz_share_link",
                options = {
                    hideTabs: true,
                    onFirstInteractive: function () {
                        console.log("Run this code when the viz has finished loading.");
                    }
                };
            var viz = new tableau.Viz(canning, url, options);

            //Coastal length vs fishing village
            var coastal = document.getElementById("coastalength"),
                url = "https://public.tableau.com/views/Disposition_16012857004750/Sheet1?:language=en&:display_count=y&publish=yes&:origin=viz_share_link",
                options = {
                    hideTabs: true,
                    onFirstInteractive: function () {
                        console.log("Run this code when the viz has finished loading.");
                    }
                };
            var viz1 = new tableau.Viz(coastal, url, options);

            // Fisher folk
            var fisherfolk = document.getElementById("fisherfolk"),
                url = "https://public.tableau.com/views/Book1_16025722461900/Sheet1?:language=en&:display_count=y&publish=yes&:origin=viz_share_link",
                options = {
                    hideTabs: true,
                    onFirstInteractive: function () {
                        console.log("Run this code when the viz has finished loading.");
                    }
                };
            var viz2 = new tableau.Viz(fisherfolk, url, options);

            //Frozen
            var frozen = document.getElementById("frozen"),
                url = "https://public.tableau.com/views/Disposition-1/Frozen?:language=en&:display_count=y&publish=yes&:origin=viz_share_link",
                options = {
                    hideTabs: true,
                    onFirstInteractive: function () {
                        console.log("Run this code when the viz has finished loading.");
                    }
                };
            var viz3 = new tableau.Viz(frozen, url, options);

            // Market fresh
            var marketfresh = document.getElementById("marketfresh"),
                url = "https://public.tableau.com/views/Disposition-1/Marketingfresh?:language=en&:display_count=y&publish=yes&:origin=viz_share_link",
                options = {
                    hideTabs: true,
                    onFirstInteractive: function () {
                        console.log("Run this code when the viz has finished loading.");
                    }
                };

            var viz4 = new tableau.Viz(marketfresh, url, options);

            // Offal for Reduction
            var offal = document.getElementById("offal"),
                url = "https://public.tableau.com/views/Disposition-1/Offalforreduction?:language=en&:display_count=y&publish=yes&:origin=viz_share_link",
                options = {
                    hideTabs: true,
                    onFirstInteractive: function () {
                        console.log("Run this code when the viz has finished loading.");
                    }
                };

            var viz5 = new tableau.Viz(offal, url, options);

            //Reduction
            var reduction = document.getElementById("reduction"),
                url = "https://public.tableau.com/views/Disposition-1/Reduction?:language=en&:display_count=y&publish=yes&:origin=viz_share_link",
                options = {
                    hideTabs: true,
                    onFirstInteractive: function () {
                        console.log("Run this code when the viz has finished loading.");
                    }
                };

            var viz6 = new tableau.Viz(reduction, url, options);
        }

$(document).ready(initViz);
