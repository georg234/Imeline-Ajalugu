$(document).ready(function() {
//Categories and articles. Article content not given for 3 categories  
let categories = [
    pingelisedSyndmused = [
        {
            image: "images/thumbnails/thumb0.png",
            headline: "Aaretejaht",
            paragraph: "1820: Hispaanlased lastivad laeva aaretega, kuid see röövitakse ja aare peidetakse väikesele saarele. Tänapäeva aaretejahtija läheb seda otsima."
        },
        {
            image: "images/thumbnails/thumb1.png",
            headline: "Purustav orkaan",
            paragraph: "1900: Orkaan purustab Galvestoni linna. Katastroofis hukkub 8000 inimest ning see USA linn kaotab igaveseks oma jõukuse ja sära."
    
        },
        {
            image: "images/thumbnails/thumb2.png",
            headline: "Hirmsaim lennukatastroof",
            paragraph: "1977: Gran Canaria lennuväljal plahvatanud pommi tõttu suunatakse paljud lennud Tenerifele. Tekkinud segaduses juhtub ajaloo suurim lennuõnnetus."
    
        },
        {
            image: "images/thumbnails/thumb3.png",
            headline: "Samuraide kättemaks",
            paragraph: "1703: Noor mees sunnitakse enesetapule ning tema klanni samuraid peavad perekonna au taastama."
    
        },
        {
            image: "images/thumbnails/thumb4.png",
            headline: "Project Azorian",
            paragraph: "1968: Ootamatult upub nõukogude allveelaev K-129 tuumarakettidega pardal. Mõne aasta pärast alustab CIA vaenlase allveelaeva koopia ehitamist - algab projekt Azorian."
    
        },
        {
            image: "images/thumbnails/thumb5.png",
            headline: "Viis ööpäeva põrgus",
            paragraph: "1977: Palestiina terroristid kaaperdavad reisilennuki. Tund-tunnilt kustub reisijate lootus eluga pääseda. Lääne-Saksamaa saadab Somaaliasse teel olevale lennukile vastu eriüksuse."
    
        },
        {
            image: "images/thumbnails/thumb6.png",
            headline: "Tuumakatastroof Tšernobõlis",
            paragraph: "1986: Suur osa Nõukogude Liidu elektrist tuleb tuumajaamadest, kuid nende ehitamisel on tehtud mitmeid vigu. 26. aprillil toimub Tšernobõli tuumajaamas plahvatus ning ajaloo suurim tuumakatastroof saab tõeks."
    
        },
    ],
    kuulsadTeod = [
        {
            image: "images/thumbnails/thumb0.png",
            headline: "kuulsadTeod",
            paragraph: "1820: Hispaanlased lastivad laeva aaretega, kuid see röövitakse ja aare peidetakse väikesele saarele. Tänapäeva aaretejahtija läheb seda otsima."
        },
        {
            image: "images/thumbnails/thumb1.png",
            headline: "Purustav orkaan",
            paragraph: "1900: Orkaan purustab Galvestoni linna. Katastroofis hukkub 8000 inimest ning see USA linn kaotab igaveseks oma jõukuse ja sära."
    
        },
        {
            image: "images/thumbnails/thumb2.png",
            headline: "Hirmsaim lennukatastroof",
            paragraph: "1977: Gran Canaria lennuväljal plahvatanud pommi tõttu suunatakse paljud lennud Tenerifele. Tekkinud segaduses juhtub ajaloo suurim lennuõnnetus."
    
        },
        {
            image: "images/thumbnails/thumb3.png",
            headline: "Samuraide kättemaks",
            paragraph: "1703: Noor mees sunnitakse enesetapule ning tema klanni samuraid peavad perekonna au taastama."
    
        },
        {
            image: "images/thumbnails/thumb4.png",
            headline: "Project Azorian",
            paragraph: "1968: Ootamatult upub nõukogude allveelaev K-129 tuumarakettidega pardal. Mõne aasta pärast alustab CIA vaenlase allveelaeva koopia ehitamist - algab projekt Azorian."
    
        },
        {
            image: "images/thumbnails/thumb5.png",
            headline: "Viis ööpäeva põrgus",
            paragraph: "1977: Palestiina terroristid kaaperdavad reisilennuki. Tund-tunnilt kustub reisijate lootus eluga pääseda. Lääne-Saksamaa saadab Somaaliasse teel olevale lennukile vastu eriüksuse."
    
        },
        {
            image: "images/thumbnails/thumb6.png",
            headline: "Tuumakatastroof Tšernobõlis",
            paragraph: "1986: Suur osa Nõukogude Liidu elektrist tuleb tuumajaamadest, kuid nende ehitamisel on tehtud mitmeid vigu. 26. aprillil toimub Tšernobõli tuumajaamas plahvatus ning ajaloo suurim tuumakatastroof saab tõeks."
    
        },
    ],
    igapaevaElu = [
        {
            image: "images/thumbnails/thumb0.png",
            headline: "igapaevaElu",
            paragraph: "1820: Hispaanlased lastivad laeva aaretega, kuid see röövitakse ja aare peidetakse väikesele saarele. Tänapäeva aaretejahtija läheb seda otsima."
        },
        {
            image: "images/thumbnails/thumb1.png",
            headline: "Purustav orkaan",
            paragraph: "1900: Orkaan purustab Galvestoni linna. Katastroofis hukkub 8000 inimest ning see USA linn kaotab igaveseks oma jõukuse ja sära."
    
        },
        {
            image: "images/thumbnails/thumb2.png",
            headline: "Hirmsaim lennukatastroof",
            paragraph: "1977: Gran Canaria lennuväljal plahvatanud pommi tõttu suunatakse paljud lennud Tenerifele. Tekkinud segaduses juhtub ajaloo suurim lennuõnnetus."
    
        },
        {
            image: "images/thumbnails/thumb3.png",
            headline: "Samuraide kättemaks",
            paragraph: "1703: Noor mees sunnitakse enesetapule ning tema klanni samuraid peavad perekonna au taastama."
    
        },
        {
            image: "images/thumbnails/thumb4.png",
            headline: "Project Azorian",
            paragraph: "1968: Ootamatult upub nõukogude allveelaev K-129 tuumarakettidega pardal. Mõne aasta pärast alustab CIA vaenlase allveelaeva koopia ehitamist - algab projekt Azorian."
    
        },
        {
            image: "images/thumbnails/thumb5.png",
            headline: "Viis ööpäeva põrgus",
            paragraph: "1977: Palestiina terroristid kaaperdavad reisilennuki. Tund-tunnilt kustub reisijate lootus eluga pääseda. Lääne-Saksamaa saadab Somaaliasse teel olevale lennukile vastu eriüksuse."
    
        },
        {
            image: "images/thumbnails/thumb6.png",
            headline: "Tuumakatastroof Tšernobõlis",
            paragraph: "1986: Suur osa Nõukogude Liidu elektrist tuleb tuumajaamadest, kuid nende ehitamisel on tehtud mitmeid vigu. 26. aprillil toimub Tšernobõli tuumajaamas plahvatus ning ajaloo suurim tuumakatastroof saab tõeks."
    
        },
    ],
    suuredKonfliktid = [
        {
            image: "images/thumbnails/thumb0.png",
            headline: "suuredKonfliktid",
            paragraph: "1820: Hispaanlased lastivad laeva aaretega, kuid see röövitakse ja aare peidetakse väikesele saarele. Tänapäeva aaretejahtija läheb seda otsima."
        },
        {
            image: "images/thumbnails/thumb1.png",
            headline: "Purustav orkaan",
            paragraph: "1900: Orkaan purustab Galvestoni linna. Katastroofis hukkub 8000 inimest ning see USA linn kaotab igaveseks oma jõukuse ja sära."
    
        },
        {
            image: "images/thumbnails/thumb2.png",
            headline: "Hirmsaim lennukatastroof",
            paragraph: "1977: Gran Canaria lennuväljal plahvatanud pommi tõttu suunatakse paljud lennud Tenerifele. Tekkinud segaduses juhtub ajaloo suurim lennuõnnetus."
    
        },
        {
            image: "images/thumbnails/thumb3.png",
            headline: "Samuraide kättemaks",
            paragraph: "1703: Noor mees sunnitakse enesetapule ning tema klanni samuraid peavad perekonna au taastama."
    
        },
        {
            image: "images/thumbnails/thumb4.png",
            headline: "Project Azorian",
            paragraph: "1968: Ootamatult upub nõukogude allveelaev K-129 tuumarakettidega pardal. Mõne aasta pärast alustab CIA vaenlase allveelaeva koopia ehitamist - algab projekt Azorian."
    
        },
        {
            image: "images/thumbnails/thumb5.png",
            headline: "Viis ööpäeva põrgus",
            paragraph: "1977: Palestiina terroristid kaaperdavad reisilennuki. Tund-tunnilt kustub reisijate lootus eluga pääseda. Lääne-Saksamaa saadab Somaaliasse teel olevale lennukile vastu eriüksuse."
    
        },
        {
            image: "images/thumbnails/thumb6.png",
            headline: "Tuumakatastroof Tšernobõlis",
            paragraph: "1986: Suur osa Nõukogude Liidu elektrist tuleb tuumajaamadest, kuid nende ehitamisel on tehtud mitmeid vigu. 26. aprillil toimub Tšernobõli tuumajaamas plahvatus ning ajaloo suurim tuumakatastroof saab tõeks."
    
        },
    ]
]

let genArticleBlock = function(tab, index) {
    let cardBody = $(`#card-${tab}`);
    let container = $(`<div></div>`)
    let article = $(`<article></article>`);
    let textBlock = $('<div></div>').addClass('article-text');
    let checkbox = 
        $(`
        <label class="checkbox-container">\
            <input type="checkbox" data-tab=${tab} data-article=${tab}:${index}>\
            <span class="checkmark"></span>\
        </label>\
        `);

    let image = $(`<img src="${categories[tab][index].image}">`);
    let headline = $(`<h6>${categories[tab][index].headline}</h6>`);
    let paragraph = $(`<p>${categories[tab][index].paragraph}</p>`);

    textBlock.append(headline, paragraph);
    article.append(image, textBlock);
    container.append(checkbox,article);
    cardBody.append(container);
}

let genArticles = function(tab) {
    for (let i = 0; i < 7; i++) {
        genArticleBlock(tab, i);
    }    
}
genArticles(0);

//Generates articles for clicked tab
$('.card-header').click(function() {
    let tab = parseInt(this.id);
    if ($(`#card-${tab}`).children().length < 1) {
        genArticles(tab);
    }
});

//Opens next tab and generates articles
$(`.btn-next`).click(function() {
    let tab = parseInt(this.id);
    if ($(`#card-${tab+1}`).children().length < 1) {
        genArticles(tab+1);
    }
    $(`#collapse-${tab+2}`).collapse('toggle');
});

//Contains the articles to use in November magazine release =) (syntax- category nr: article nr);
let selectedArticles = []

//Deals with checkboxes, counters and "Valmis!" button
let checkedCounters = [[],[],[],[]];
$(document).on('click', '.checkbox-container input', function() {
    let article = $(this).data(`article`);
    let tabNum = $(this).data(`tab`);
    let counter = $(`#counter-${tabNum}`);
    let background = $(this).closest(`div`);
    
    if ($(this).prop("checked")) {
        selectedArticles.push(article);

        checkedCounters[tabNum]++;
        background.addClass(`checked`);
        counter.html(`${checkedCounters[tabNum]}/3`);

        //prevents checks going over 3
        if (checkedCounters[tabNum] > 3) {
            selectedArticles.pop(article);

            checkedCounters[tabNum]--;
            this.checked = false;
            background.removeClass(`checked`);
            counter.html(`${checkedCounters[tabNum]}/3`);
        } 

    } else {
        selectedArticles.pop(article);

        checkedCounters[tabNum]--;
        background.removeClass(`checked`);
        counter.html(`${checkedCounters[tabNum]}/3`);
    }
    
    checkTabs();
    //activates/disables "Valmis!" button
    function checkTabs() {
        let tabsChecked = 0;
        let btnDone = $(`.btn-done`);
        for (let i = 0; i < 5; i++) {
            if (checkedCounters[i] > 0) {
                tabsChecked++
            }
        }
        if (tabsChecked === 4) {
            btnDone.addClass(`btn-activated`);
            btnDone.prop('disabled', false)
        } else {
            btnDone.removeClass(`btn-activated`);
            btnDone.prop('disabled', true);
        }
    }
    console.log(selectedArticles);
});

//Event listeners- adds/removes active class from tab headers
$(`.card-header a`).click(function() {
    $(`.active-header`).removeClass(`active-header`);
    $(this).find(`h5`).addClass(`active-header`);
    
    if ($(this).attr('aria-expanded') == 'true') {
        $(`.active-header`).removeClass(`active-header`);
    }
});

$(`.btn-next`).click(function() {
    $(`.active-header`).removeClass(`active-header`);
    let nextBtn = parseInt(this.id)+1;
    $(`#${nextBtn}`).find(`h5`).addClass(`active-header`);
});

});