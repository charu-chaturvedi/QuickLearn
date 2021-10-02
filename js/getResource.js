/* Source Logic */
let selectCategoryBtn = document.querySelectorAll(".select-category-btn");
// Contribution and Resource Box
const resourceBox = document.getElementById("resourceBox");
const contributionGuidline = document.getElementById("contributionGuideline");
// Resource Showcase Section
const beginnerResourceBox = document.getElementById("beginnerResourceBox");
const intermediateResourceBox = document.getElementById("intermediateResourceBox");
const advancedResourceBox = document.getElementById("advancedResourceBox");
// const domains = ["web","web","web"];
const programming = ["c++", "java", "python"];
const programmingLength = programming.length;
const webdata = ["frontend", "backend", "mern"];
let bres = "";
let bdata = "";
let ires = "";
let idata = "";
let ares = "";
let adata = "";
// Contribution Btn
contributionBtn.addEventListener("click", (e) => {
  resourceBox.style.display = "none";
  contributionGuidline.style.display = "block";
  contributionBtn.style.backgroundColor = "#6940d3";
  contributionBtn.style.color = "white";
  for (let j = 0; j < category.length; j++) {
    selectBtn[j].style.backgroundColor = "white";
    selectBtn[j].style.color = "black";
  }
  for (let i = 0; i < category.length; i++) {
    let x = category[i].querySelector('.select-option');
    x.style.display = "none";
  }
})
// Select Category Btn
for (let i = 0; i < selectCategoryBtn.length; i++) {
  selectCategoryBtn[i].addEventListener("click", async (e) => {
    contributionGuidline.style.display = "none";
    resourceBox.style.display = "block";
    /* getting domain */
    beginnerResourceBox.innerHTML = "";
    intermediateResourceBox.innerHTML = "";
    advancedResourceBox.innerHTML = "";
    const value = selectCategoryBtn[i].value;

    /* To check whether an extra parameter need to be passed in url */
    // In case of Web it is needed 
    if (value == "programming") {
      /* beginner*/
      bres = await fetch(`../data/domains/${value}/${programming[i]}/beginner.json`);
      bdata = await bres.json();
      /* intermediate */
      ires = await fetch(`../data/domains/${value}/${programming[i]}/intermediate.json`);
      idata = await ires.json();
      /* advanced */
      ares = await fetch(`../data/domains/${value}/${programming[i]}/advanced.json`);
      adata = await ares.json();
    } else if (value == "web") {
      /* beginner*/
      bres = await fetch(`../data/domains/${value}/${webdata[i-programmingLength]}/beginner.json`);
      bdata = await bres.json();
      /* intermediate */
      ires = await fetch(`../data/domains/${value}/${webdata[i-programmingLength]}/intermediate.json`);
      idata = await ires.json();
      /* advanced */
      ares = await fetch(`../data/domains/${value}/${webdata[i-3]}/advanced.json`);
      adata = await ares.json();

    } else if (value == "android") {
      /* beginner */
      bres = await fetch(`../data/domains/${value}/beginner.json`);
      bdata = await bres.json();
      /* intermediate */
      ires = await fetch(`../data/domains/${value}/intermediate.json`);
      idata = await ires.json();
      /* advanced */
      ares = await fetch(`../data/domains/${value}/advanced.json`);
      adata = await ares.json();
    }
    else if(value=="designing") {
      /* beginner */
      bres = await fetch(`../data/domains/${value}/beginner.json`);
      bdata = await bres.json();
      /* intermediate */
      ires = await fetch(`../data/domains/${value}/intermediate.json`);
      idata = await ires.json();
      /* advanced */
      ares = await fetch(`../data/domains/${value}/advanced.json`);
      adata = await ares.json();
    }
    else {
       /* beginner */
       bres = await fetch(`../data/domains/${value}/beginner.json`);
       bdata = await bres.json();
       /* intermediate */
       ires = await fetch(`../data/domains/${value}/intermediate.json`);
       idata = await ires.json();
       /* advanced */
       ares = await fetch(`../data/domains/${value}/advanced.json`);
       adata = await ares.json();
    }
    /* beginner data */
    // later we can have loader
    setTimeout(() => {
      if (bdata != "") {
        for (let i = 0; i < bdata.length; i++) {
          beginnerResourceBox.innerHTML += ` 
        <div class="col-6 col-md-3">
        <div class="card m-3" style="width: 15rem">
          <img
            src="./assets/images/explore.jpg"
            class="card-img-top img-sz mx-auto"
            alt="..."
          />
          <div class="card-body text-center">
            <h5 class="card-title">${bdata[i].title}</h5>
            <a href="${bdata[i].link}" class="btn view-more-btn" target="_blank">View More</a>
          </div>
        </div>
      </div>`;
        }
      } else {
        beginnerResourceBox.innerHTML += `<img
                src="./assets/images/empty.jpg"
                class="card-img-top img-sz mx-auto"
                alt="..."
              />`
      }
      /* Intermediate Resource Box */

      if (idata != "") {
        for (let i = 0; i < idata.length; i++) {
          intermediateResourceBox.innerHTML += `
        <div class="col-6 col-md-3">
        <div class="card m-3" style="width: 15rem">
          <img
            src="./assets/images/explore.jpg"
            class="card-img-top img-sz mx-auto"
            alt="..."
          />
          <div class="card-body text-center">
            <h5 class="card-title">${idata[i].title}</h5>
            <a href="${idata[i].link}" class="btn view-more-btn" target="_blank">View More</a>
          </div>
        </div>
      </div>`;
        }
      } else {
        intermediateResourceBox.innerHTML += `<img
                src="./assets/images/empty.jpg"
                class="card-img-top img-sz mx-auto"
                alt="..."
              />`;
      }
      /* Advanced Resource Box */
      if (adata != "") {
        for (let i = 0; i < adata.length; i++) {
          advancedResourceBox.innerHTML += `
        <div class="col-6 col-md-3">
        <div class="card m-3" style="width: 15rem">
          <img
          src="./assets/images/explore.jpg"
            class="card-img-top img-sz mx-auto"
            alt="..."
          />
          <div class="card-body text-center">
            <h5 class="card-title">${adata[i].title}</h5>
            <a href="${adata[i].link}" class="btn view-more-btn" target="_blank">View More</a>
          </div>
        </div>
      </div>`;
        }
      } else {
        advancedResourceBox.innerHTML += `<img
                src="./assets/images/empty.jpg"
                class="card-img-top img-sz mx-auto"
                alt="..."
              />`;
      }
    }, 300);


  })

}