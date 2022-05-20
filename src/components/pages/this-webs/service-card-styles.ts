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
      transition-property: border-color;
      transition-duration: 0.3s;

      :hover {
         border-color: var(--pallete-accent);
      }
   }
   span {
      display: block;
      justify-self: flex-end;
   }
   .service-card-title {
      max-width: 60%;
      
      font-size: 1.05rem;
      font-family: var(--fonts-secondary);
      font-weight: 600;
      color: var(--pallete-text);

      margin-bottom: 0.25rem;

      justify-self: flex-start;
      flex-grow: 1;
      overflow: hidden;
   }
   .service-card-sub-titles {
      max-width: 60%;

      font-size: 0.9rem;
      font-weight: 500;
      color: var(--pallete-text);

      margin-top: 0.75rem;
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
