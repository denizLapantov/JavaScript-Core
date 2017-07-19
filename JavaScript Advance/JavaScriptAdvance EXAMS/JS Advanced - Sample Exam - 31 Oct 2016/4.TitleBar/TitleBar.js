class TitleBar{
    constructor(title){
        this.title = title;
        this.links = [];
    }

     addLink(href,name){
        let link = $('<a>').addClass("menu-link").attr("href",href).text(name);
        this.links.push(link)
     }

     appendTo(selector){
         let header = $('<header>').addClass('header');
         let divHeaderRow = $('<div>').addClass('header-row');
         let button = $('<a>').addClass("button").html("&#9776;").click(() => $('div.drawer').toggle());
         let span = $('<span>').addClass("title").text(this.title);


         let drawer = $('<div>').addClass("drawer");
         let navigation = $('<nav>').addClass("menu");
         this.links.forEach(link => navigation.append(link));
         divHeaderRow.append(button);
         divHeaderRow.append(span);
         drawer.append(navigation);
         header.append(divHeaderRow);
         header.append(drawer);
         $(selector).append(header);
     }
}

