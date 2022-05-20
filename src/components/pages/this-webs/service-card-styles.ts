import { styled } from 'linaria/react'

export const Card = styled.div`
   display: flex;
   flex-direction: column;
   width: 340px;
   min-height: 290px;
   
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

   span[data-devStatus="ready"], span[data-health="OK"] {
      color: var(--pallete-constants-success);
   }
   span[data-devStatus="planned"], span[data-health="UNKNOWN"] {
      color: var(--pallete-opaque-text);
   }
   span[data-devStatus="dev"], span[data-health="MAINT"] {
      color: var(--pallete-constants-info);
   }   
   span[data-health="DOWN"] {
      color: var(--pallete-constants-err);
   }

`
