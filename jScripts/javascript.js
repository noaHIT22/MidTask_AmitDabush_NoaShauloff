const jsonData = {
    "generators": [
        {
            "id": 1,
            "title":"חולצת כריסמס",
            "color": "אדום",
            "priceAfterDiscount":  "30",
            "discount": "60%",
            "size": "s/m/l",
            "image": ["images/item1/item1_1.jpeg","images/item1/item1_2.jpeg","images/item1/item1_3.jpeg"],
            "filter": "clothes"
        },
        {
            "id": 2,
            "title": "טייץ שלושה רבעים",
            "color": "שחור",
            "priceAfterDiscount":  "15",
            "discount": "30%",
            "size": "s/m/l",
            "image": ["images/item2/item2_1.jpeg","images/item2/item2_2.jpeg","images/item2/item2_3.jpeg"],
            "filter": "clothes"
        },
        {
            "id": 3,
            "title": "חולצה פיג׳מה",
            "color": "ורוד",
            "priceAfterDiscount":  "99",
            "discount": "10%", 
            "size": "s/m/l",
            "image": ["images/item3/item3_1.jpeg","images/item3/item3_2.jpeg","images/item3/item3_3.jpeg"],
            "filter": "clothes"
        },
        {
            "id": 4,
            "title": "מכנס טרנינג סטיצ׳",
            "color": "תכלת",
            "priceAfterDiscount":  "109",
            "discount": "30%",  
            "size": "s/m/l",
            "image": ["images/item4/item4_1.jpeg","images/item4/item4_2.jpeg","images/item4/item4_3.jpeg"],
            "filter": "clothes"
        },
        {
            "id": 5,
            "title": "גרבי חורף נעימים",
            "color": "אפור",
            "priceAfterDiscount":  "89",
            "discount": "25%",  
            "size": "s/m/l" ,
            "image": ["images/item5/item5_1.jpeg","images/item5/item5_2.jpeg","images/item5/item5_3.jpeg"],
            "filter": "clothes"
        },
        {
            "id": 6,
            "title": "נעלי בית לבבות",
            "color": "אפור",
            "priceAfterDiscount":  "49",
            "discount": "15%",  
            "size": "s/m/l",
            "image": ["images/item6/item6_1.jpeg","images/item6/item6_2.jpeg","images/item6/item6_3.jpeg"],
            "filter": "other"
        },
        {
            "id": 7,
            "title": "חוברת צביעה דיסני",
            "color": "צבעוני",
            "priceAfterDiscount":  "15",
            "discount": "30%",
            "size": "s/m/l" ,
            "image": ["images/item7/item7_1.jpeg","images/item7/item7_2.jpeg","images/item7/item7_3.jpeg"],
            "filter": "other"
        },
        {
            "id": 8,
            "title": "מכנס פיג׳מה פפיון",
            "color": "כחול",
            "priceAfterDiscount":  "79",
            "discount": "40%", 
            "size": "s/m/l" ,
            "image": ["images/item8/item8_1.jpeg","images/item8/item8_2.jpeg","images/item8/item8_3.jpeg"],
            "filter": "clothes"
        },
        {
            "id": 9,
            "title": "מארז גרביים- 2 יחידות",
            "color": "לבן",
            "priceAfterDiscount":  "49",
            "discount": "15%", 
            "size": "s/m/l"   ,
            "image": ["images/item9/item9_1.jpeg","images/item9/item9_2.jpeg","images/item9/item9_3.jpeg"],
            "filter": "clothes"
        },
        {
            "id": 10,
            "title": "חולצת מיקי מנצנצת",
            "color": "לבן",
            "priceAfterDiscount":  "99",
            "discount": "10%", 
            "size": "s/m/l" ,
            "image": ["images/item10/item10_1.jpeg","images/item10/item10_2.jpeg","images/item10/item10_3.jpeg"],
            "filter": "clothes"
        }
    ]
}


//לאחר טעינת העמוד
document.addEventListener("DOMContentLoaded", function (event) {
    // קריאה לפונקציה שתיצור את הרשימה אחרי עליית העמוד
    createItems('all');
    //קריאה למודל שיצרנו בעמוד
    const modal = document.getElementById("myModal");
    //סגירת המודל
    const closeModal = document.getElementsByClassName("close")[0];
    //קריאה לכפתור לרכישה
    const btnPurchase = document.getElementById("btnPurchase");
    //משתנה לספירת כמות הפריטים שיש בסל
    let itemCounts = 0; 
    //קריאה לדיב של הפריטים שהוכנסו לסל הקניות
    const purchasedItemsContainer = document.getElementById("purchasedItemsContainer");
    //קריאה לכפתור סל הקניות
    const shoppingCartButton = document.getElementById("shoppingCart");


//פונקציות שסוגרות את המודל
    closeModal.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };

    //פונקציית לחיצה על כפתור לרכישה
    btnPurchase.addEventListener("click", function () {
        //יצירת שם הפריט
        const modalTitle = document.getElementById("modalTitle").textContent;
        //יצירת תמונת הפריט
        const modalImage1 = document.getElementById("modalImage1").getAttribute("src");
        //יצירת דיב חדש שיכיל בתוכו את הפריטים שהוכנסו לסל הקניות
        const newItemDiv = document.createElement("div");

        newItemDiv.classList.add("purchased-item");
        //הצגה בעמוד
        newItemDiv.innerHTML = `
            <p class="purchasedTitel">${modalTitle}</p>
            <img class="purchasedImg" src="${modalImage1}">
            `
        ;

        //הוספת הדיב החדש לעמוד
        purchasedItemsContainer.appendChild(newItemDiv);
        modal.style.display = "none";

    });


    //פונקציית לחיצה לכפתור סל הקניות
    shoppingCartButton.addEventListener("click", function () {
        //הצגת הדיב עם הפריטים
        if (purchasedItemsContainer.style.display === "block") {
            purchasedItemsContainer.style.display = "none";
        } else {
            purchasedItemsContainer.style.display = "block";
        }    
    });
    
});

//פונקציה לסינון הפריטים
function filterProducts(filter) {
    createItems(filter);
  }
  
  document.querySelectorAll('.btn-group button').forEach(button => {
    button.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      filterProducts(filter);
    });
  });
  
// פונקציה ליצירת הפריטים
function createItems(filterItem) {
    // הבאת האלמנט בו ניצור את הרשימה בדף
    const itemsContainer = document.getElementById('itemsContainer');
    // איפוס של האלמנט
    itemsContainer.innerHTML = "";
    // יצירת תגית של רשימה
    const div = document.createElement("div");
    // השמת מזהה לתגית
    div.setAttribute("id", "topics-list");

    // מעבר על הרשימה מעלה והוספה של פריט לרשימה בדף בכל סיבוב
    jsonData.generators.forEach(generator => {
        if (filterItem === 'all' || generator.filter === filterItem) {
        // יצירה של תגית הפריט
        const sectionItem = document.createElement("section");
        // הוספת מזהה לתגית
        sectionItem.setAttribute("id", `section_${generator.id}`);
        //תגיות העמוד
        sectionItem.innerHTML = `
        <div class="row card">
        <section class="col-3 card-body">
        <img src="${generator.image[0]}">
        <p id="titel">${generator.title}</p>
        <p>${generator.color}</p>
        <p>₪${generator.priceAfterDiscount}</p>
        <p id="discount">הנחה של ${generator.discount}</p>
        </section>
        </div>
        `

        //פונקציית לחיצה של המודל
    sectionItem.addEventListener("click", function () {
        //קריאה לאלמנטים בעמוד
    const modalTitle = document.getElementById("modalTitle");
    const modalPrice = document.getElementById("modalPrice");
    const modalImage1 = document.getElementById("modalImage1");
    const modalImage2 = document.getElementById("modalImage2");
    const modalImage3 = document.getElementById("modalImage3");


    //הכנסה של הפריטים למשתנים
    modalTitle.innerText = generator.title;
    modalPrice.innerText ="₪" + generator.priceAfterDiscount;
    modalSize.innerText = generator.size;
    modalImage1.src = generator.image[0];
    modalImage2.src = generator.image[1];
    modalImage3.src = generator.image[2];

    
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
});
//הוספת הפריטים לעמוד
itemsContainer.appendChild(sectionItem);
        }
    });
}

//פונקציה לתפריט הניווט 
function toggleNav(){
    document.getElementById("main-nav").classList.toggle("hide-mobile");
}

//פונקציה לסגירת הכפתור בסל הקניות
function xButton(){
    purchasedItemsContainer.style.display = "none";
}
