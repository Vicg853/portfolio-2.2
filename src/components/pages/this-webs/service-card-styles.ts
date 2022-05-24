import { styled } from 'linaria/react'

export const ServiceDetailsCard = styled.div`
   position: absolute;
   width: 90%;
   height: 90%;
   z-index: 2;
   top: 5%;
   
   border-radius: 0.7rem;
   background: var(--pallete-bg);
   border: 1px solid var(--pallete-accent);

   --scale: 1.08;
   --opacity: 0.4;
   --anim-dur: 0.2s;

   transition: var(--anim-dur) ease-in-out;
   transition-property: transform, opacity;
   &[data-active="true"] {
      left: 5%;
      transform: scale(1);
      opacity: 1;
   }
   &[data-active="false"] {
      left: 100vw;
      transform: scale(var(--scale));
      opacity: var(--opacity);
      animation: zoomOut var(--anim-dur) ease-in-out;
   }

   @keyframes zoomOut {
      0% {
         transform: scale(1);
         opacity: 1;
         left: 5%;
      }
      99% {
         transform: scale(var(--scale));
         opacity: var(--opacity);
         left: 5%;
      }
      100% {
         left: 100vw;
      }
      
   }
`

export const Card = styled.div`
   position: relative;
   display: inline-flex;
   flex-direction: column;
   
   background: var(--pallete-bg);
   border-radius: 0.8rem;
   border: 1px solid var(--pallete-opaque-bgAlt);

   padding: 1.3rem;
   
   &&[data-details="true"] {
      cursor: pointer;

      transition-property: transform, box-shadow, border-color;
      transition-duration: 0.65s;
      transition-timing-function: cubic-bezier(0.4,-0.52, 0.55, 1.49);
      box-shadow: none;
      
      .service-card-title {
         text-decoration: underline;
         text-decoration-color: var(--pallete-accent);
      }
      
      transform: perspective(1500px);
      &&:hover {
         border-color: var(--pallete-bgAlt);
         transform:
           perspective(1500px)
           rotate3d(0.5,-0.566, 0, 10deg)
           rotate(1deg)
           translateZ(-3px);
         box-shadow:
           2em 4em 6em -2em rgba(0,0,0,.5),
           1em 2em 3.5em -2.5em rgba(0,0,0,.5);
      }
   }
   span {
      display: block;
      justify-self: flex-start;
   }

   &&[data-has-health="true"] > .service-card-health-status{
      flex-grow: 1;
      text-align: start;
      margin-bottom: 0.5rem;
   }

   &&[data-has-health="false"] > .service-card-dev-status {
      text-align: start;
      flex-grow: 1;
      margin-bottom: 0.5rem;
   }

   .service-card-flex-end-els {
      display: block;
      justify-self: flex-end;
   }
   .service-card-title {
      max-width: 60%;
      
      font-size: 1.05rem;
      font-family: var(--fonts-secondary);
      font-weight: 600;
      color: var(--pallete-text);

      margin-bottom: 0.13rem;

      overflow: hidden;
   }
   .service-card-sub-titles {
      max-width: 60%;

      font-size: 0.9rem;
      font-weight: 500;
      color: var(--pallete-text);

      margin-top: 0.45rem;
   }

   .service-card-dev-status, 
   .service-card-svc-version,
   .service-card-health-status {
      font-size: 0.9rem;
      font-weight: 400;
      margin-top: 0.15rem;
   }

   .service-card-svc-version {
      color: var(--pallete-opaque-text);
   }

   .service-card-svc-versiontitle {
      margin-top: 1rem;
   }

   span[data-devStatus="READY"], span[data-health="OK"] {
      color: var(--pallete-constants-success);
   }
   span[data-devStatus="DRAFT"], span[data-health="UNKNOWN"] {
      color: var(--pallete-opaque-text);
   }
   span[data-devStatus="DEV"], span[data-health="MAINT"] {
      color: var(--pallete-constants-info);
   }   
   span[data-health="DOWN"] {
      color: var(--pallete-constants-err);
   }

   transition: 0.2s ease-in-out;
   transition-property: transform, filter, opacity;
`

