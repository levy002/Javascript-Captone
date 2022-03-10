import getshow from './getShows.js';

const modal = document.getElementById('modal-popup');
const modalTemplate = (show) => {
      const showInfo = document.createElement('li');
      showInfo.id = show.id;
      showInfo.innerHTML = `
  <img class="modal-img" src=${show.image.medium} alt="show Image">
    <h2 class="modal-title" id="show-title">${show.name}</h2>
    <p class="modal-summary">${show.summary}

    <section id="awesome-comments"> 
    <div id="score">
         <h2 class="refresh"> Recent Comments </h2> 
         <div id="comments-list"></div>
    </div> 
   <div id="input-form">
       <form action="#" id="add-comment-form">
           <h2>Add your Comment </h2>
           <input type="text" placeholder="Your name" name="title" required>
           <textarea name="comments" id="" cols="30" rows="10" placeholder="Enter your comment" required></textarea>
           <input type="submit" value="Submit">
       </form>
   </div> 
   </section>
  `;
      modal.appendChild(showInfo);
}

const displayModal = async (element) => {
  const fetchedShows = await getshow();
  const shows = fetchedShows.slice(0, 24);
  modal.style.display = 'flex';
  const showId = Number(element.parentNode.id);
  shows.forEach((show) =>{
    console.log(show);
    if (show.id === showId) {
      modalTemplate(show)
    }
  })
};

export default displayModal;