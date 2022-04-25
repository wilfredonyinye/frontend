function Rating(props) {
  const { rating, numReviews } = props;
  return (
    <div className="rating">
      <span>
        <i
          className={
            rating >= 1
              ? 'fas fa-star'
              : rating >= 0.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
          }
        />
      </span>
      <span>
        <i
          className={
            rating >= 2
              ? 'fas fa-star'
              : rating >= 1.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
          }
        />
      </span>
      <span>
        <i
          className={
            rating >= 3
              ? 'fas fa-star'
              : rating >= 2.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
          }
        />
      </span>
      <span>
        <i
          className={
            rating >= 4
              ? 'fas fa-star'
              : rating >= 3.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
          }
        />
      </span>
      <span>
        <i
          className={
            rating >= 5
              ? 'fas fa-star'
              : rating >= 4.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
          }
        />
      </span>
      <span> {numReviews} reviews</span>
    </div>
  )
}
export default Rating;
// import React from 'react';

// export default function Rating(props) {
//   return !props.value ? (
//     <div></div>
//   ) : (
//     <div className="rating">
//       <span>
//         <i
//           className={
//             props.value >= 1
//               ? 'fa fa-star'
//               : props.value >= 0.5
//                 ? 'fa fa-star-half-o'
//                 : 'fa fa-star-o'
//           }
//         ></i>
//       </span>
//       <span>
//         <i
//           className={
//             props.value >= 2
//               ? 'fa fa-star'
//               : props.value >= 1.5
//                 ? 'fa fa-star-half-o'
//                 : 'fa fa-star-o'
//           }
//         ></i>
//       </span>
//       <span>
//         <i
//           className={
//             props.value >= 3
//               ? 'fa fa-star'
//               : props.value >= 2.5
//                 ? 'fa fa-star-half-o'
//                 : 'fa fa-star-o'
//           }
//         ></i>
//       </span>
//       <span>
//         <i
//           className={
//             props.value >= 4
//               ? 'fa fa-star'
//               : props.value >= 3.5
//                 ? 'fa fa-star-half-o'
//                 : 'fa fa-star-o'
//           }
//         ></i>
//       </span>
//       <span>
//         <i
//           className={
//             props.value >= 5
//               ? 'fa fa-star'
//               : props.value >= 4.5
//                 ? 'fa fa-star-half-o'
//                 : 'fa fa-star-o'
//           }
//         ></i>
//       </span>
//       <span>{props.text ? props.text : ''}</span>
//     </div>
//   );
// }