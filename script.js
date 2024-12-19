// Restrict horizontal scroll on body and html
document.documentElement.style.overflowX = 'hidden';
document.body.style.overflowX = 'hidden';
document.documentElement.style.maxWidth = '100%';
document.body.style.maxWidth = '100%';

// Prevent any child element from causing horizontal scroll
const restrictHorizontalScroll = () => {
    document.querySelectorAll('*').forEach((element) => {
        element.style.maxWidth = '100%';
        element.style.overflowX = 'hidden';
        element.style.boxSizing = 'border-box';
    });
};

// Run the restriction function on load and resize
restrictHorizontalScroll();
window.addEventListener('resize', restrictHorizontalScroll);


const header1 = document.createElement("div");
header1.style.backgroundColor = "transparent";
header1.style.color = "black"; // Add text color
header1.style.top = "10px"; // Adjust position
header1.style.left = "10px";
header1.style.width = "auto";
header1.style.height = "auto";
header1.style.position = "fixed";
header1.style.zIndex = "10"; // Higher zIndex

const header2 = document.createElement("div");
header2.style.backgroundColor = "transparent";
header2.style.color = "black"; // Add text color
header2.style.top = "40px"; // Adjust position
header2.style.left = "10px";
header2.style.width = "auto";
header2.style.height = "auto";
header2.style.position = "fixed";
header2.style.zIndex = "10"; // Higher zIndex

const header = document.createElement("div");
header.style.backgroundColor = "white";
header.style.top = "-1px";
header.style.left = "-1px";
header.style.width = "100%";
header.style.position = "fixed";
header.style.zIndex = "5";

const headerSection = document.createElement("div");
headerSection.style.backgroundColor = "transparent";
headerSection.style.position = "absolute";
headerSection.style.right = "5%";
headerSection.style.width = "700px";
headerSection.style.height = "80px";

const headerTitle = document.createElement("h1");
headerTitle.innerHTML = "Marungko";
headerTitle.style.position = "absolute";
headerTitle.style.fontFamily = "Helvetica";

const headerHome = document.createElement("h1");
headerHome.innerHTML = "Home";
headerHome.style.position = "absolute";
headerHome.style.top = "30%";
headerHome.style.left = "170px";
headerHome.style.fontSize = "25px";
headerHome.style.fontFamily = "Helvetica";
headerHome.style.transform = "translate(-50%, -50%)";
headerHome.style.cursor = "pointer";

const headerAbout = document.createElement("h1");
headerAbout.innerHTML = "About";
headerAbout.style.position = "absolute";
headerAbout.style.top = "30%";
headerAbout.style.left = "290px";
headerAbout.style.fontSize = "25px";
headerAbout.style.fontFamily = "Helvetica";
headerAbout.style.transform = "translate(-50%, -50%)";
headerAbout.style.cursor = "pointer";

const headerPrograms = document.createElement("h1");
headerPrograms.innerHTML = "Programs";
headerPrograms.style.position = "absolute";
headerPrograms.style.top = "30%";
headerPrograms.style.left = "62%";
headerPrograms.style.fontSize = "25px";
headerPrograms.style.fontFamily = "Helvetica";
headerPrograms.style.transform = "translate(-50%, -50%)";
headerPrograms.style.cursor = "pointer";

const headerContacts = document.createElement("h1");
headerContacts.innerHTML = "Contacts";
headerContacts.style.position = "absolute";
headerContacts.style.top = "30%";
headerContacts.style.left = "590px";
headerContacts.style.fontSize = "25px";
headerContacts.style.fontFamily = "Helvetica";
headerContacts.style.transform = "translate(-50%, -50%)";
headerContacts.style.cursor = "pointer";

const menuButton = document.createElement("div");
menuButton.style.backgroundImage = "url('images/menu_button.png')";
menuButton.style.position = "absolute";
menuButton.style.transform = "translate(-50%, -50%)";
menuButton.style.cursor = "pointer";

const bg_1 = document.createElement("div");
bg_1.style.backgroundImage = "url('images/bg_1.png')";
bg_1.style.position = "absolute";
bg_1.style.transform = "translate(-50%, -50%) scale(1.1, 1.1)";

const bg_1BodyButtonContainer = document.createElement("div");
bg_1BodyButtonContainer.style.position = "absolute";

const bg_1Title = document.createElement("h1");
bg_1Title.innerHTML = "Ang Pagsasaliksik";
bg_1Title.style.position = "absolute";
bg_1Title.style.color = "white";
bg_1Title.style.fontFamily = "Helvetica";
bg_1Title.style.textShadow = "2px 2px 4px black";
bg_1Title.style.cursor = "pointer";

const bg_1Body = document.createElement("h1");
bg_1Body.innerHTML = "Tuklasin ang kasiyahan ng pagbabasa, kung saan bawat pahina ay nagbubukas ng mga bagong mundo at nagpapasikò ng walang katapusang imahinasyon.";
bg_1Body.style.position = "absolute";
bg_1Body.style.color = "white";
bg_1Body.style.fontFamily = "Helvetica";
bg_1Body.style.textShadow = "2px 2px 4px black";
bg_1Body.style.cursor = "pointer";

const bg_1Button_1 = document.createElement("div");
bg_1Button_1.innerHTML = "Magbasa Na";
bg_1Button_1.style.position = "absolute";
bg_1Button_1.style.width = "150px";
bg_1Button_1.style.height = "60px";
bg_1Button_1.style.fontSize = "25px";
bg_1Button_1.style.color = "white";
bg_1Button_1.style.display = "flex";
bg_1Button_1.style.alignItems = "center";
bg_1Button_1.style.justifyContent = "center";
bg_1Button_1.style.fontFamily = "Helvetica";
bg_1Button_1.style.borderRadius = "20px";
bg_1Button_1.style.backgroundColor = "black";
bg_1Button_1.style.cursor = "pointer";

const bg_1Button_2 = document.createElement("div");
bg_1Button_2.innerHTML = "Kontaks";
bg_1Button_2.style.position = "absolute";
bg_1Button_2.style.width = "150px";
bg_1Button_2.style.height = "60px";
bg_1Button_2.style.fontSize = "25px";
bg_1Button_2.style.color = "white";
bg_1Button_2.style.display = "flex";
bg_1Button_2.style.alignItems = "center";
bg_1Button_2.style.justifyContent = "center";
bg_1Button_2.style.fontFamily = "Helvetica";
bg_1Button_2.style.borderRadius = "20px";
bg_1Button_2.style.backgroundColor = "transparent";
bg_1Button_2.style.textShadow = "2px 2px 4px black";
bg_1Button_2.style.cursor = "pointer";

const content_1 = document.createElement("div");
content_1.style.position = "absolute";
content_1.style.top = "100%";
content_1.style.left = "0px";
content_1.style.width = "100%";
content_1.style.height = "100%";
content_1.style.backgroundColor = "white";

const content_1Img_1 = document.createElement("div");
content_1Img_1.style.backgroundImage = "url('images/teacher_1.jpg')";
content_1Img_1.style.position = "absolute";
content_1Img_1.style.transform = "translate(-50%, 0%)";
content_1Img_1.style.transition = "opacity 1s ease-in-out";
content_1Img_1.style.backgroundColor = "white";

const content_1Title = document.createElement("h1");
content_1Title.innerHTML = "Unang Hakbang";
content_1Title.style.position = "absolute";
content_1Title.style.color = "black";
content_1Title.style.fontFamily = "Helvetica";
content_1Title.style.transform = "translate(-50%, -50%) scale(1.5, 1.5)";

const content_1Body_Container = document.createElement("div");
content_1Body_Container.style.position = "absolute";
content_1Body_Container.style.color = "black";
content_1Body_Container.style.textAlign = "justify";
content_1Body_Container.style.fontFamily = "Helvetica";
content_1Body_Container.style.transform = "translate(-50%, -50%) scale(1.3, 1.3)";

const content_1Body_1 = document.createElement("div");
content_1Body_1.innerHTML = "Ang pagbabasa ay ang pintuan tungo sa walang katapusang mga pakikipagsapalaran at kaalaman, at ang pagbabasa para sa mga baguhan ay nagsisilbing perpektong unang hakbang sa mundong ito. Ito ay dinisenyo para sa mga nagsisimula pa lamang, gamit ang simpleng wika at maiikling pangungusap na madaling maintindihan. Ang mga kuwento ay magaan, masaya, at kadalasang pamilyar, na nagtatampok ng mga karaniwang karanasan o mga kaibig-ibig na karakter na tumutulong magpatibay ng tiwala sa sarili at gawing masaya ang proseso ng pagbabasa.";
content_1Body_1.style.position = "absolute";
content_1Body_1.style.color = "black";
content_1Body_1.style.textAlign = "justify";
content_1Body_1.style.fontFamily = "Helvetica";
content_1Body_1.style.transform = "translate(-50%, -50%) scale(1.3, 1.3)";

const content_1Body_2 = document.createElement("div");
content_1Body_2.innerHTML = "Ang pangunahing layunin ng pagbabasa para sa mga baguhan ay tulungan ang mga bagong mambabasa na magsanay at paunlarin ang kanilang mga kasanayan nang hindi nakakaramdam ng labis na pagkabahala. Sa pamamagitan ng pagtuon sa mga pamilyar na salita at tema, naglilikha ito ng isang positibo at walang-stress na kapaligiran kung saan ang mga mambabasa ay maaaring magtamo ng pag-unlad sa kanilang sariling bilis. Kung ikaw man ay isang batang mag-aaral o isang matandang nagsisimula muli, ang mga aklat para sa mga baguhan ay nagbibigay ng isang magiliw na simula, na nagbubukas ng isang mundo ng imahinasyon at pagtuklas.";
content_1Body_2.style.position = "absolute";
content_1Body_2.style.color = "black";
content_1Body_2.style.textAlign = "justify";
content_1Body_2.style.fontFamily = "Helvetica";
content_1Body_2.style.transform = "translate(-50%, -50%) scale(1.3, 1.3)";

const content_2 = document.createElement("div");
content_2.style.position = "absolute";
content_2.style.top = "200%";
content_2.style.left = "0px";
content_2.style.width = "100%";
content_2.style.height = "130%";
content_2.style.backgroundColor = "white";
content_2.style.transition = "opacity 1s";

const content_2Button_Container = document.createElement("div");
content_2Button_Container.style.position = "absolute";
content_2Button_Container.style.transform = "translate(-50%, -50%)";
content_2Button_Container.style.backgroundColor = "white";

const content_2Title = document.createElement("h1");
content_2Title.innerHTML = "Programa sa Pagbasa";
content_2Title.style.position = "absolute";
content_2Title.style.color = "black";
content_2Title.style.fontFamily = "Helvetica";
content_2Title.style.transform = "translate(-50%, -50%) scale(1.5, 1.5)";

const content_2Button_1 = document.createElement("div");
content_2Button_1.innerHTML = "First Words";
content_2Button_1.style.position = "absolute";
content_2Button_1.style.fontFamily = "Helvetica";
content_2Button_1.style.transform = "translate(-50%, -50%) scale(1.5, 1.5)";
content_2Button_1.style.transition = "color 0.3s ease, background-color 0.3s ease, transform 0.1s ease";
content_2Button_1.style.color = "white";
content_2Button_1.style.textAlign = "center";
content_2Button_1.style.display = "flex";
content_2Button_1.style.alignItems = "center";
content_2Button_1.style.justifyContent = "center";
content_2Button_1.style.backgroundColor = "black";
content_2Button_1.style.cursor = "pointer";

const content_2Button_2 = document.createElement("div");
content_2Button_2.innerHTML = "Early Reader";
content_2Button_2.style.position = "absolute";
content_2Button_2.style.fontFamily = "Helvetica";
content_2Button_2.style.transform = "translate(-50%, -50%) scale(1.5, 1.5)";
content_2Button_2.style.transition = "color 0.3s ease-in-out, background-color 0.3s ease-in-out, transform 0.3s ease";
content_2Button_2.style.color = "black";
content_2Button_2.style.textAlign = "center";
content_2Button_2.style.display = "flex";
content_2Button_2.style.alignItems = "center";
content_2Button_2.style.justifyContent = "center";
content_2Button_2.style.backgroundColor = "white";
content_2Button_2.style.cursor = "pointer";

const content_2Button_3 = document.createElement("div");
content_2Button_3.innerHTML = "Growing Reader";
content_2Button_3.style.position = "absolute";
content_2Button_3.style.fontFamily = "Helvetica";
content_2Button_3.style.transform = "translate(-50%, -50%) scale(1.5, 1.5)";
content_2Button_3.style.transition = "color 0.3s ease-in-out, background-color 0.3s ease-in-out, transform 0.3s ease";
content_2Button_3.style.color = "black";
content_2Button_3.style.textAlign = "center";
content_2Button_3.style.display = "flex";
content_2Button_3.style.alignItems = "center";
content_2Button_3.style.justifyContent = "center";
content_2Button_3.style.backgroundColor = "white";
content_2Button_3.style.cursor = "pointer";

const content_2Button_4 = document.createElement("div");
content_2Button_4.innerHTML = "Confident Reader";
content_2Button_4.style.position = "absolute";
content_2Button_4.style.fontFamily = "Helvetica";
content_2Button_4.style.transform = "translate(-50%, -50%) scale(1.5, 1.5)";
content_2Button_4.style.transition = "color 0.3s ease-in-out, background-color 0.3s ease-in-out, transform 0.3s ease";
content_2Button_4.style.color = "black";
content_2Button_4.style.textAlign = "center";
content_2Button_4.style.display = "flex";
content_2Button_4.style.alignItems = "center";
content_2Button_4.style.justifyContent = "center";
content_2Button_4.style.backgroundColor = "white";
content_2Button_4.style.cursor = "pointer";

const content_2Button_5 = document.createElement("div");
content_2Button_5.innerHTML = "Story Explorer";
content_2Button_5.style.position = "absolute";
content_2Button_5.style.fontFamily = "Helvetica";
content_2Button_5.style.transform = "translate(-50%, -50%) scale(1.5, 1.5)";
content_2Button_5.style.transition = "color 0.3s ease-in-out, background-color 0.3s ease-in-out, transform 0.3s ease";
content_2Button_5.style.color = "black";
content_2Button_5.style.textAlign = "center";
content_2Button_5.style.display = "flex";
content_2Button_5.style.alignItems = "center";
content_2Button_5.style.justifyContent = "center";
content_2Button_5.style.backgroundColor = "white";
content_2Button_5.style.cursor = "pointer";

const content_2Img = document.createElement("div");
content_2Img.style.position = "absolute";
content_2Img.style.outline = "1px solid";
content_2Img.style.color = "black";
content_2Img.style.textAlign = "justify";
content_2Img.style.fontFamily = "Helvetica";
content_2Img.style.transform = "translate(-50%, -50%) scale(1.3, 1.3)";
content_2Img.style.backgroundColor = "gray";
content_2Img.style.transition = "opacity 0.5s ease-in-out";

const content_2Description = document.createElement("div");
content_2Description.style.position = "absolute";
content_2Description.style.backgroundColor = "white";

const content_2DescriptionTitle = document.createElement("h1");
content_2DescriptionTitle.innerHTML = "First Words";
content_2DescriptionTitle.style.position = "absolute";
content_2DescriptionTitle.style.fontFamily = "Helvetica";
content_2DescriptionTitle.style.color = "black"; 
content_2DescriptionTitle.style.transition = "opacity 0.5s ease-in-out"; 

const content_2DescriptionBody = document.createElement("div");
content_2DescriptionBody.innerHTML = `Nakatuon sa mga simpleng, karaniwang salita at maiikling pangungusap. Pinakamainam para sa mga mambabasa na nagsisimula nang makilala ang mga pangunahing bokabularyo at matutong bigkasin ang mga salita."`;
content_2DescriptionBody.style.position = "absolute";
content_2DescriptionBody.style.textAlign = "justify";
content_2DescriptionBody.style.fontFamily = "Helvetica";
content_2DescriptionBody.style.color = "black"; 
content_2DescriptionBody.style.transition = "opacity 0.5s ease-in-out"; 
let descriptionBody_1 = `Nakatuon sa mga simpleng, karaniwang salita at maiikling pangungusap. Pinakamainam para sa mga mambabasa na nagsisimula nang makilala ang mga pangunahing bokabularyo at matutong bigkasin ang mga salita.`;
let descriptionBody_2 = `Medyo mahahabang pangungusap na may mga pangunahing bantas. Kabilang ang mga pamilyar na sight words at simpleng pahiwatig ng konteksto. Mainam para sa mga mambabasa na nagsisimulang maunawaan ang pangunahing estruktura ng pangungusap.`;
let descriptionBody_3 = `Mas magkakaibang estruktura ng pangungusap na may pinalawak na bokabularyo. Ipinapakilala sa antalang ito ang simpleng pag-uusap at mas deskriptibong wika. Dapat magsimula nang magtayo ng kakayahan sa pag-unawa sa binasa ang mga mambabasa.`;
let descriptionBody_4 = `Ang mga mambabasa sa antalang ito ay kayang humawak ng maiikling talata at iba't ibang uri ng pangungusap. Makakaranas sila ng mga bagong bokabularyo gamit ang mga pahiwatig ng konteksto at magsisimula nang maunawaan ang mga simpleng elemento ng kuwento.`;
let descriptionBody_5 = `Ipinapakilala ang mga unang aklat na may kabanata na may maiikling kabanata, mga pangunahing balangkas ng kwento, at simpleng pag-unlad ng karakter. Mainam para sa mga mambabasa na lumilipat sa mas independent na pagbabasa.`;

const content_2Button = document.createElement("div");
content_2Button.innerHTML = "Magbasa";
content_2Button.style.position = "absolute";
content_2Button.style.fontFamily = "Helvetica";
content_2Button.style.transform = "translate(-50%, -50%) scale(1.5, 1.5)";
content_2Button.style.transition = "color 0.3s ease-in-out, background-color 0.3s ease-in-out, transform 0.3s ease";
content_2Button.style.color = "white";
content_2Button.style.textAlign = "center";
content_2Button.style.display = "flex";
content_2Button.style.alignItems = "center";
content_2Button.style.justifyContent = "center";
content_2Button.style.backgroundColor = "black";
content_2Button.style.borderRadius = "30px";
content_2Button.style.cursor = "pointer";

const content_3 = document.createElement("div");
content_3.style.position = "absolute";
content_3.style.top = "350%";
content_3.style.left = "0px";
content_3.style.width = "100%";
content_3.style.height = "90%";
content_3.style.backgroundColor = "white";

const content_3Body_Container = document.createElement("div");
content_3Body_Container.style.position = "absolute";
content_3Body_Container.style.backgroundColor = "white";
content_3Body_Container.style.color = "black";
content_3Body_Container.style.textAlign = "justify";
content_3Body_Container.style.fontFamily = "Helvetica";
content_3Body_Container.style.transform = "translate(-50%, -50%) scale(1.3, 1.3)";

const content_3Title = document.createElement("h1");
content_3Title.innerHTML = "Ang Pagsusulit";
content_3Title.style.position = "absolute";
content_3Title.style.color = "black";
content_3Title.style.fontFamily = "Helvetica";
content_3Title.style.transform = "translate(-50%, -50%) scale(1.3, 1.3)";

const content_3Img = document.createElement("div");
content_3Img.style.position = "absolute";
content_3Img.style.outline = "1px solid";
content_3Img.style.color = "black";
content_3Img.style.textAlign = "justify";
content_3Img.style.fontFamily = "Helvetica";
content_3Img.style.transform = "translate(-50%, -50%) scale(1.3, 1.3)";
content_3Img.style.backgroundImage = "url('images/activity_1.jpg')";
content_3Img.style.transition = "opacity 0.5s ease-in-out";

const content_3Body_1 = document.createElement("div");
content_3Body_1.innerHTML = "Ang pagbabasa ay isang kamangha-manghang paraan upang tuklasin ang mga bagong ideya at kuwento, kahit para sa mga nagsisimula pa lamang. Ang mga maiikli at simpleng kuwento ay isang magandang lugar upang magsimula, na may mga pamilyar na salita at mga masayang sorpresa sa bawat pahina. Habang nagbabasa, obserbahan ang iba't ibang mga salita at kung paano sila nagsasama-sama upang lumikha ng isang mas malaking larawan. Nakakatuwa ang matutunan ang mga bagong bagay at malaman kung ano ang mangyayari sa susunod. Tuwing magbabasa ka, nagtatamo ka ng mga bagong kasanayan at tiwala sa sarili, na nagpapadali sa pagpapahalaga sa pakikipagsapalaran. Kaya't sumabak na sa isang kuwento, maglaan ng oras, at tingnan kung saan ka nito dadalhin!";
content_3Body_1.style.position = "absolute";
content_3Body_1.style.color = "black";
content_3Body_1.style.textAlign = "justify";
content_3Body_1.style.fontFamily = "Helvetica";
content_3Body_1.style.transform = "translate(-50%, -50%) scale(1.3, 1.3)";

const content_3Button = document.createElement("div");
content_3Button.innerHTML = "Magsulit";
content_3Button.style.position = "absolute";
content_3Button.style.fontFamily = "Helvetica";
content_3Button.style.transform = "translate(-50%, -50%) scale(1.5, 1.5)";
content_3Button.style.transition = "color 0.3s ease-in-out, background-color 0.3s ease-in-out, transform 0.3s ease";
content_3Button.style.color = "white";
content_3Button.style.textAlign = "center";
content_3Button.style.display = "flex";
content_3Button.style.alignItems = "center";
content_3Button.style.justifyContent = "center";
content_3Button.style.backgroundColor = "black";
content_3Button.style.borderRadius = "20px";
content_3Button.style.cursor = "pointer";

const content_lesson = document.createElement("div");
content_lesson.style.position = "absolute";
content_lesson.style.top = "200%";
content_lesson.style.width = "100%";
content_lesson.style.height = "150%";
content_lesson.style.backgroundColor = "gray";
content_lesson.style.transition = "opacity 1s ease-in-out";
content_lesson.style.opacity = "0";

document.body.append(header);
document.body.append(bg_1);
document.body.append(content_1);
document.body.append(content_2);
document.body.append(content_3);

header.append(headerTitle);
header.append(header1);
header.append(header2);
header.append(headerSection);

headerSection.append(headerHome);
headerSection.append(headerAbout);
headerSection.append(headerPrograms);
headerSection.append(headerContacts);

document.body.append(bg_1Title);
document.body.append(bg_1Body);
document.body.append(bg_1Button_1);
document.body.append(bg_1Button_2);

content_1.append(content_1Body_Container);

content_1Body_Container.append(content_1Title);
content_1Body_Container.append(content_1Body_1);
content_1Body_Container.append(content_1Body_2);

content_2.append(content_2Title);
content_2.append(content_2Img);
content_2.append(content_2Description);
content_2.append(content_2Button);

content_2Description.append(content_2DescriptionTitle);
content_2Description.append(content_2DescriptionBody);

content_3.append(content_3Body_Container);
content_3Body_Container.append(content_3Title);
content_3Body_Container.append(content_3Body_1);
content_3Body_Container.append(content_3Button);

function screenUpdate() {
    if (window.innerWidth < 800) {
        headerHome.remove();
        headerAbout.remove();
        headerPrograms.remove();
        headerContacts.remove();
        content_1Img_1.remove();
        content_3Img.remove();
        headerSection.append(menuButton);
        content_2Button_1.remove();
        content_2Button_2.remove();
        content_2Button_3.remove();
        content_2Button_4.remove();
        content_2Button_5.remove();
        content_2.append(content_2Button_Container);
        content_2Button_Container.append(content_2Button_1);
        content_2Button_Container.append(content_2Button_2);
        content_2Button_Container.append(content_2Button_3);
        content_2Button_Container.append(content_2Button_4);
        content_2Button_Container.append(content_2Button_5);
        header.style.height = "80px";
        headerTitle.style.left = "8%";
        headerTitle.style.fontSize = "23px";
        menuButton.style.backgroundSize = "50px 50px";
        menuButton.style.backgroundPosition = "0px -0.5px";
        menuButton.style.top = "45%";
        menuButton.style.right = "-3%";
        menuButton.style.width = "50px";
        menuButton.style.height = "50px";
        bg_1.style.backgroundSize = "1100px 800px";
        bg_1.style.backgroundPosition = "-60px -90px";
        bg_1.style.top = "51%";
        bg_1.style.left = "50%";
        bg_1.style.width = "100%";
        bg_1.style.height = "500px";
        bg_1Title.style.top = "35%";
        bg_1Title.style.left = "5%";
        bg_1Title.style.fontSize = "50px";
        bg_1Title.style.width = "300px";
        bg_1Body.style.top = "57%";
        bg_1Body.style.left = "5%";
        bg_1Body.style.fontSize = "15px";
        bg_1Body.style.width = "400px";
        bg_1Button_1.style.top = "68%";
        bg_1Button_1.style.left = "30px";
        bg_1Button_2.style.top = "68%";
        bg_1Button_2.style.left = "200px";
        bg_1BodyButtonContainer.style.top = "94%";
        bg_1BodyButtonContainer.style.left = "0%";
        bg_1BodyButtonContainer.style.width = "300px";
        content_1Title.style.top = "6%";
        content_1Title.style.left= "40%";
        content_1Title.style.width= "50%";
        content_1Title.style.fontSize= "15px";
        content_1Body_Container.style.top = "55%";
        content_1Body_Container.style.left = "50%";
        content_1Body_Container.style.width = "70%";
        content_1Body_Container.style.height = "75%";
        content_1Body_1.style.top = "30%";
        content_1Body_1.style.left= "48%";
        content_1Body_1.style.width = "230px";
        content_1Body_1.style.fontSize = "10px";
        content_1Body_2.style.top = "75%";
        content_1Body_2.style.left= "48%";
        content_1Body_2.style.width = "230px";
        content_1Body_2.style.fontSize= "10px";
        content_2Title.style.top= "10%";
        content_2Title.style.left= "53%";
	    content_2Title.style.width = "60%";
	    content_2Title.style.fontSize = "25px";	 

        content_2Button_Container.style.top = "67%";
        content_2Button_Container.style.left = "50%";
        content_2Button_Container.style.width = "150px";
        content_2Button_Container.style.height = "3%";
        content_2Button_1.style.top = "50%";
        content_2Button_1.style.left = "10%";
        content_2Button_1.style.width = "10px"; 
        content_2Button_1.style.height = "10px";
        content_2Button_1.style.fontSize = "0px";
        content_2Button_1.style.borderRadius = "10px";
        content_2Button_1.style.outline = "1px solid";
        content_2Button_2.style.top = "50%";
        content_2Button_2.style.left = "30%";
        content_2Button_2.style.width = "10px"; 
        content_2Button_2.style.height = "10px";
        content_2Button_2.style.fontSize = "0px";
        content_2Button_2.style.borderRadius = "10px";
        content_2Button_2.style.outline = "1px solid";
        content_2Button_3.style.top = "50%";
        content_2Button_3.style.left = "50%";
        content_2Button_3.style.width = "10px"; 
        content_2Button_3.style.height = "10px";
        content_2Button_3.style.fontSize = "0px";
        content_2Button_3.style.borderRadius = "10px";
        content_2Button_3.style.outline = "1px solid";
        content_2Button_4.style.top = "50%";
        content_2Button_4.style.left = "70%";
        content_2Button_4.style.width = "10px"; 
        content_2Button_4.style.height = "10px";
        content_2Button_4.style.fontSize = "0px";
        content_2Button_4.style.borderRadius = "10px";
        content_2Button_4.style.outline = "1px solid";
        content_2Button_5.style.top = "50%";
        content_2Button_5.style.left = "90%";
        content_2Button_5.style.width = "10px"; 
        content_2Button_5.style.height = "10px";
        content_2Button_5.style.fontSize = "0px";
        content_2Button_5.style.borderRadius = "10px";
        content_2Button_5.style.outline = "1px solid";
        content_2Img.style.top = "360px";
        content_2Img.style.left = "50%";	 
        content_2Img.style.width = "63%";
        content_2Img.style.height = "220px";

        content_2Description.style.top = "70%";
        content_2Description.style.left = "10%";
        content_2Description.style.width = "450px";
        content_2Description.style.height = "220px";
        content_2DescriptionTitle.style.top = "-5%";
        content_2DescriptionTitle.style.fontSize = "20px";
        content_2DescriptionBody.style.top = "35px";
        content_2DescriptionBody.style.width = "85%";
        content_2DescriptionBody.style.fontSize = "18px";

        content_2Button.style.top = "100%";
        content_2Button.style.left = "50%";
        content_2Button.style.width = "250px";
        content_2Button.style.height = "5%";
        content_2Button.style.fontSize = "13px";

        content_3Body_Container.style.top = "55%";
        content_3Body_Container.style.left = "50%";
        content_3Body_Container.style.width = "70%";
        content_3Body_Container.style.height = "65%";	
        content_3Title.style.top = "0%";	 
        content_3Title.style.left = "170px";	
        content_3Title.style.width = "230px"; 	
        content_3Title.style.fontSize = "25px";  

        content_3Body_1.style.top = "45%";
        content_3Body_1.style.left= "50%";
        content_3Body_1.style.width = "230px";	 
        content_3Body_1.style.fontSize = "10px";

        content_3Button.style.top = "85%";
        content_3Button.style.left = "50%";
        content_3Button.style.width = "200px";
        content_3Button.style.height = "10%";
        content_3Button.style.fontSize = "13px";
            } 

    if ((window.innerWidth > 800) && (window.innerWidth < 1100)){
        menuButton.remove();            
        content_2Button_Container.remove();
        headerSection.append(headerHome);
        headerSection.append(headerAbout);
        headerSection.append(headerPrograms);
        headerSection.append(headerContacts); 
        content_1.append(content_1Img_1);
        content_2.append(content_2Button_1);
        content_2.append(content_2Button_2);
        content_2.append(content_2Button_3);
        content_2.append(content_2Button_4);
        content_2.append(content_2Button_5);
        content_3.append(content_3Img);
        header.style.height = "80px";
        headerTitle.style.left = "5%";
        headerTitle.style.fontSize = "30px";
        bg_1.style.backgroundPosition = "-20px -30px";
        bg_1.style.top = "51%";
        bg_1.style.left = "50%";
        bg_1.style.width = "90%";
        bg_1.style.height = "500px";
        bg_1Title.style.top = "28%";
        bg_1Title.style.left = "10%";
        bg_1Title.style.fontSize = "60px";
        bg_1Title.style.width = "800px";
        bg_1Body.style.top = "48%";
        bg_1Body.style.left = "10.5%";
        bg_1Body.style.width = "500px";
        bg_1Body.style.fontSize = "50px";
        bg_1Body.style.fontSize = "20px";
        bg_1Button_1.style.top = "65%";
        bg_1Button_1.style.left = "90px";
        bg_1Button_2.style.top = "65%";
        bg_1Button_2.style.left = "250px";
        bg_1BodyButtonContainer.style.top = "70%";
        bg_1BodyButtonContainer.style.left = "10%";
        content_1Img_1.style.backgroundSize = "880px 555px";
        content_1Img_1.style.backgroundPosition = "-390px 0px";
        content_1Img_1.style.top = "15%";
        content_1Img_1.style.left = "30%";
        content_1Img_1.style.width = "400px";
        content_1Img_1.style.height = "78%";
        content_1Title.style.top = "0%";
        content_1Title.style.left= "40%";
        content_1Title.style.width= "50%";
        content_1Title.style.fontSize= "15px";
        content_1Body_Container.style.top = "54%";
        content_1Body_Container.style.left = "75%";
        content_1Body_Container.style.width = "300px";
        content_1Body_Container.style.height = "60%";
        content_1Body_1.style.top = "30%";
        content_1Body_1.style.left= "48%";
        content_1Body_1.style.width = "69%";
        content_1Body_1.style.fontSize = "10px";
        content_1Body_2.style.top = "76%";
        content_1Body_2.style.left= "48%";
        content_1Body_2.style.width = "69%";
        content_1Body_2.style.fontSize= "10px";

        content_2Title.style.top = "22%";
        content_2Title.style.left= "26%";
        content_2Title.style.width = "23%";
        content_2Title.style.fontSize = "25px";
        content_2Button_1.style.top = "40%";
        content_2Button_1.style.left = "25%";
        content_2Button_1.style.width = "22%"; 
        content_2Button_1.style.height = "7%";
        content_2Button_1.style.fontSize = "20px";
        content_2Button_1.style.outline = "0px";
        content_2Button_2.style.top = "52%";
        content_2Button_2.style.left = "25%";
        content_2Button_2.style.width = "22%"; 
        content_2Button_2.style.height = "7%";
        content_2Button_2.style.fontSize = "20px";
        content_2Button_2.style.outline = "0px";
        content_2Button_3.style.top = "64%";
        content_2Button_3.style.left = "25%";
        content_2Button_3.style.width = "22%"; 
        content_2Button_3.style.height = "7%";
        content_2Button_3.style.fontSize = "20px";
        content_2Button_3.style.outline = "0px";
        content_2Button_4.style.top = "76%";
        content_2Button_4.style.left = "25%";
        content_2Button_4.style.width = "22%"; 
        content_2Button_4.style.height = "7%";
        content_2Button_4.style.fontSize = "20px";
        content_2Button_4.style.outline = "0px";
        content_2Button_5.style.top = "88%";
        content_2Button_5.style.left = "25%";
        content_2Button_5.style.width = "22%"; 
        content_2Button_5.style.height = "7%";
        content_2Button_5.style.fontSize = "20px";
        content_2Button_5.style.outline = "0px";	
        content_2Img.style.top = "420px";
        content_2Img.style.left = "68%";	 
        content_2Img.style.width = "35%";
        content_2Img.style.height = "350px";	 
        content_2Description.style.top = "75%";
        content_2Description.style.left = "45%";
        content_2Description.style.width = "450px";
        content_2Description.style.height = "240px";
        content_2DescriptionTitle.style.top = "-5%";
        content_2DescriptionTitle.style.fontSize = "20px";
        content_2DescriptionBody.style.top = "35px";
        content_2DescriptionBody.style.fontSize = "18px";

        content_3Body_Container.style.top = "55%";
        content_3Body_Container.style.left = "650px";
        content_3Body_Container.style.width = "300px";
        content_3Body_Container.style.height = "65%";	
        content_3Img.style.backgroundSize = "580px 385px";
        content_3Img.style.backgroundPosition = "-250px 0px";
        content_3Img.style.top = "315px";
        content_3Img.style.left = "250px";
        content_3Img.style.width = "300px";
        content_3Img.style.height = "370px";
        content_3Title.style.top = "50px";	 
        content_3Title.style.left = "55%";	
        content_3Title.style.width = "200px"; 	
        content_3Title.style.fontSize = "20px";  

        content_3Body_1.style.top = "52%";
        content_3Body_1.style.left= "50%";
        content_3Body_1.style.width = "200px";	 
        content_3Body_1.style.fontSize = "10px";

        content_3Button.style.top = "87%";
        content_3Button.style.left = "50%";
        content_3Button.style.width = "50%";
        content_3Button.style.height = "10%";
        content_3Button.style.fontSize = "13px";
            }

    if (window.innerWidth > 1100){
        menuButton.remove();
        content_2Button_Container.remove();
        headerSection.append(headerHome);
        headerSection.append(headerAbout);
        headerSection.append(headerPrograms);
        headerSection.append(headerContacts);        
        content_1.append(content_1Img_1);  
        content_2.append(content_2Button_1);
        content_2.append(content_2Button_2);
        content_2.append(content_2Button_3);
        content_2.append(content_2Button_4);
        content_2.append(content_2Button_5);
        content_3.append(content_3Img);
        headerTitle.style.left = "6%";   
        header.style.height = "80px";
        headerTitle.style.fontSize = "30px";
        bg_1.style.backgroundPosition = "-20px -30px";
        bg_1.style.top = "51%";
        bg_1.style.left = "50%";
        bg_1.style.width = "80%";
        bg_1.style.height = "500px";
        bg_1Title.style.top = "28%";
        bg_1Title.style.left = "10%";
        bg_1Title.style.fontSize = "60px";
        bg_1Title.style.width = "700px";
        bg_1Body.style.top = "48%";
        bg_1Body.style.left = "10.5%";
        bg_1Body.style.width = "50%";
        bg_1Body.style.fontSize = "50px";
        bg_1Body.style.fontSize = "20px";
        bg_1Button_1.style.top = "65%";
        bg_1Button_1.style.left = "140px";
        bg_1Button_2.style.top = "65%";
        bg_1Button_2.style.left = "290px";
        bg_1BodyButtonContainer.style.top = "70%";
        bg_1BodyButtonContainer.style.left = "10%";
        content_1Img_1.style.backgroundSize = "880px 555px";
        content_1Img_1.style.backgroundPosition = "-320px 0px";
        content_1Img_1.style.top = "15%";
        content_1Img_1.style.left = "30%";
        content_1Img_1.style.width = "500px";
        content_1Img_1.style.height = "78%";
        content_1Img_1.style.left= "29%";
        content_1Img_1.style.width = "500px";
        content_1Img_1.style.backgroundSize = "880px 555px";
        content_1Img_1.style.backgroundPosition = "-330px 0px";
        content_1Title.style.top = "23%";
        content_1Title.style.left = "71%";
        content_1Title.style.width = "27%";
        content_1Title.style.fontSize = "31px";
        content_1Body_Container.style.top = "50%";
        content_1Body_Container.style.left = "52%";
        content_1Body_Container.style.width = "900px";
        content_1Body_Container.style.height = "100%";
        content_1Body_1.style.top = "42%";
        content_1Body_1.style.left= "71%";
        content_1Body_1.style.width = "30%";	 
        content_1Body_1.style.fontSize = "10px";	   
        content_1Body_2.style.top = "70%";
        content_1Body_2.style.left= "71%";
        content_1Body_2.style.width = "30%";	  
        content_1Body_2.style.fontSize = "10px";	   
        
        content_2Title.style.top = "24%";
        content_2Title.style.left= "25%";
        content_2Title.style.width = "25%";
        content_2Title.style.fontSize = "30px";
        content_2Button_1.style.top = "40%";
        content_2Button_1.style.left = "24%";
        content_2Button_1.style.width = "21%"; 
        content_2Button_1.style.height = "7%";
        content_2Button_1.style.fontSize = "20px";
        content_2Button_1.style.outline = "0px";
        content_2Button_2.style.top = "52%";
        content_2Button_2.style.left = "24%";
        content_2Button_2.style.width = "21%"; 
        content_2Button_2.style.height = "7%";
        content_2Button_2.style.fontSize = "20px";
        content_2Button_2.style.outline = "0px";
        content_2Button_3.style.top = "64%";
        content_2Button_3.style.left = "24%";
        content_2Button_3.style.width = "21%"; 
        content_2Button_3.style.height = "7%";
        content_2Button_3.style.fontSize = "20px";
        content_2Button_3.style.outline = "0px";
        content_2Button_4.style.top = "76%";
        content_2Button_4.style.left = "24%";
        content_2Button_4.style.width = "21%"; 
        content_2Button_4.style.height = "7%";
        content_2Button_4.style.fontSize = "20px";
        content_2Button_4.style.outline = "0px";
        content_2Button_5.style.top = "88%";
        content_2Button_5.style.left = "24%";
        content_2Button_5.style.width = "21%"; 
        content_2Button_5.style.height = "7%";
        content_2Button_5.style.fontSize = "20px";
        content_2Button_5.style.outline = "0px";	
        content_2Img.style.top = "420px";
        content_2Img.style.left = "68%";	 
        content_2Img.style.width = "35%";
        content_2Img.style.height = "350px";	 
        content_2Description.style.top = "80%";
        content_2Description.style.left = "45%";
        content_2Description.style.width = "615px";
        content_2Description.style.height = "150px";
        content_2DescriptionTitle.style.top = "-10%";
        content_2DescriptionTitle.style.fontSize = "20px";
        content_2DescriptionBody.style.top = "35px";
        content_2DescriptionBody.style.fontSize = "18px";

        content_2Button.style.top = "105%";
        content_2Button.style.left = "68%";
        content_2Button.style.width = "320px";
        content_2Button.style.height = "50px";

        content_3Body_Container.style.top = "55%";
        content_3Body_Container.style.left = "78%";
        content_3Body_Container.style.width = "30%";
        content_3Body_Container.style.height = "65%";	
        content_3Img.style.backgroundSize = "580px 385px";
        content_3Img.style.backgroundPosition = "-60px 0px";
        content_3Img.style.top = "315px";
        content_3Img.style.left = "400px";
        content_3Img.style.width = "40%";
        content_3Img.style.height = "370px";
        content_3Title.style.top = "10px";	 
        content_3Title.style.left = "57%";	
        content_3Title.style.width = "200px"; 	
        content_3Title.style.fontSize = "20px";  

        content_3Body_1.style.top = "48%";
        content_3Body_1.style.left= "50%";
        content_3Body_1.style.width = "250px";	 
        content_3Body_1.style.fontSize = "10px";

        content_3Button.style.top = "92%";
        content_3Button.style.left = "50%";
        content_3Button.style.width = "50%";
        content_3Button.style.height = "10%";
        content_3Button.style.fontSize = "13px";
            }
    }

    function changeBackground(imageUrl, backgroundSize = "cover", backgroundPosition = "center", category = "", description = "") {
        // Fade out the current background
        content_2Img.style.transition = "opacity 0.5s ease-in-out";
        content_2Img.style.opacity = "0";
        content_2DescriptionTitle.style.opacity = "0";
        content_2DescriptionBody.style.opacity = "0";
    
        setTimeout(() => {
            content_2Img.style.backgroundImage = `url('${imageUrl}')`;
            content_2Img.style.backgroundSize = backgroundSize;
            content_2Img.style.backgroundPosition = backgroundPosition;
            content_2DescriptionTitle.innerHTML = category;
            content_2DescriptionBody.innerHTML = description;
            content_2Img.style.opacity = "1";	
            content_2DescriptionTitle.style.opacity = "1";	
            content_2DescriptionBody.style.opacity = "1";	
        }, 500); // Wait for the fade out to complete
    }
    
    function triggerContent_2Button_1(){
        content_2Button_1.style.color = "white";
        content_2Button_1.style.backgroundColor = "black";
        content_2Button_2.style.color = "black";
        content_2Button_2.style.backgroundColor = "white";
        content_2Button_3.style.color = "black";
        content_2Button_3.style.backgroundColor = "white";
        content_2Button_4.style.color = "black";
        content_2Button_4.style.backgroundColor = "white";
        content_2Button_5.style.color = "black";
        content_2Button_5.style.backgroundColor = "white";
        if (window.innerWidth > 800) changeBackground("images/reading_1.jpg", "580px 380px", "-70px 0px", "First Words", descriptionBody_1);
        if (window.innerWidth < 800) changeBackground("images/reading_1.jpg", "400px 270px", "-80px -20px", "First Words", descriptionBody_1);
        program_number = 1;
        }

    function triggerContent_2Button_2(){
        content_2Button_1.style.color = "black";
        content_2Button_1.style.backgroundColor = "white";
        content_2Button_2.style.color = "white";
        content_2Button_2.style.backgroundColor = "black";
        content_2Button_3.style.color = "black";
        content_2Button_3.style.backgroundColor = "white";
        content_2Button_4.style.color = "black";
        content_2Button_4.style.backgroundColor = "white";
        content_2Button_5.style.color = "black";
        content_2Button_5.style.backgroundColor = "white";
        if (window.innerWidth > 800) changeBackground("images/reading_4.jpg", "580px 380px", "-50px 0px", "Early Reader", descriptionBody_2);
        if (window.innerWidth < 800) changeBackground("images/reading_4.jpg", "380px 230px", "-50px 0px", "Early Reader", descriptionBody_2);
        program_number = 2;
            }

    function triggerContent_2Button_3(){
        content_2Button_1.style.color = "black";
        content_2Button_1.style.backgroundColor = "white";
        content_2Button_2.style.color = "black";
        content_2Button_2.style.backgroundColor = "white";
        content_2Button_3.style.color = "white";
        content_2Button_3.style.backgroundColor = "black";
        content_2Button_4.style.color = "black";
        content_2Button_4.style.backgroundColor = "white";
        content_2Button_5.style.color = "black";
        content_2Button_5.style.backgroundColor = "white";
        if (window.innerWidth > 800) changeBackground("images/reading_3.jpeg", "580px 380px", "-100px 0px", "Growing Reader", descriptionBody_3);
        if (window.innerWidth < 800) changeBackground("images/reading_3.jpeg", "430px 250px", "-100px 0px", "Growing Reader", descriptionBody_3);
        program_number = 3;
        }

    function triggerContent_2Button_4(){
        content_2Button_1.style.color = "black";
        content_2Button_1.style.backgroundColor = "white";
        content_2Button_2.style.color = "black";
        content_2Button_2.style.backgroundColor = "white";
        content_2Button_3.style.color = "black";
        content_2Button_3.style.backgroundColor = "white";
        content_2Button_4.style.color = "white";
        content_2Button_4.style.backgroundColor = "black";
        content_2Button_5.style.color = "black";
        content_2Button_5.style.backgroundColor = "white";
        changeBackground("images/reading_5.jpg");
        if (window.innerWidth > 800) changeBackground("images/reading_5.jpg", "700px 380px", "-225px 0px", "Confident Reader", descriptionBody_4);
        if (window.innerWidth < 800) changeBackground("images/reading_5.jpg", "600px 300px", "-225px -60px", "Confident Reader", descriptionBody_4);
        program_number = 4;
            }

    content_2Button_1.addEventListener("click", () => {
        triggerContent_2Button_1();
            });
        
    content_2Button_2.addEventListener("click", () => {
        triggerContent_2Button_2();	
            });
        
    content_2Button_3.addEventListener("click", () => {
        triggerContent_2Button_3();
             });
        
    content_2Button_4.addEventListener("click", () => {
        triggerContent_2Button_4();
            });

    content_2Button_5.addEventListener("click", () => {
        content_2Button_1.style.color = "black";
        content_2Button_1.style.backgroundColor = "white";
        content_2Button_2.style.color = "black";
        content_2Button_2.style.backgroundColor = "white";
        content_2Button_3.style.color = "black";
        content_2Button_3.style.backgroundColor = "white";
        content_2Button_4.style.color = "black";
        content_2Button_4.style.backgroundColor = "white";
        content_2Button_5.style.color = "white";
        content_2Button_5.style.backgroundColor = "black";    
        if (window.innerWidth > 1000) changeBackground("images/reading_2.jpg", "580px 380px", "-50px 0px", "Story Explorer", descriptionBody_5);
        if (window.innerWidth < 1000) changeBackground("images/reading_2.jpg", "360px 230px", "-50px 0px", "Story Explorer", descriptionBody_5);
        program_number = 5;
    });

    content_2Button.addEventListener("click", () => {        
         setTimeout(function() {content_2.style.opacity = "0"; }, 0);
         setTimeout(function() {document.body.append(content_lesson)}, 1000);
         setTimeout(function() {content_lesson.style.opacity = "1";}, 1100);
         window.location.href = 'Lecture/lesson.html';
            });

    content_3Button.addEventListener("click", () => {  
        window.location.href = 'index2.html';
        });

function updateDimensions() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    header1.innerHTML = `Width: ${width}px`;
    header2.innerHTML = `Height: ${height}px`;
}
updateDimensions();

window.addEventListener('resize', updateDimensions);




// Add event listener with correct spelling
window.addEventListener('load', () => {
    screenUpdate();    
    triggerContent_2Button_1();  
	});
window.addEventListener('resize', () => {
    screenUpdate();    
	});


// Run `screenUpdate` initially to handle the current screen size
screenUpdate();




document.addEventListener('wheel', (event) => {
    if (event.ctrlKey) {
        event.preventDefault();
    }
}, { passive: false });

document.addEventListener('gesturestart', (event) => {
    event.preventDefault();
});
document.addEventListener('gesturechange', (event) => {
    event.preventDefault();
});
document.addEventListener('gestureend', (event) => {
    event.preventDefault();
});
