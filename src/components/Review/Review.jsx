import './Review.css';
import { useParams, useNavigate } from 'react-router-dom';

function Review({ reviews }) {
  const navigate = useNavigate();
  const params = useParams();
  let id = params.reviewId;

  id = id - 1;

  return (
    <div className='review'>
      {reviews && (
        <div className='review__item'>
          <h3 className='review__title'>{reviews[id]?.title}</h3>
          <p className='review__text'>{reviews[id]?.text}</p>
          <p className='review__rating'>Final rating:{reviews[id]?.rating}/5</p>
          <button
            onClick={() => {
              navigate('/reviews');
            }}
            className='review__button'
            type='button'
          >
            Back to review list
          </button>
        </div>
      )}
    </div>
  );
}

export default Review;
