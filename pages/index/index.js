import React, { PropTypes } from 'react';
import s from './styles.css';
import cx from 'classnames';

class IndexPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showFavs: false,
      selectFav: false
    }
  }

  _renderRental (showFavs) {
    return (
      <div className={cx(s.rental, showFavs && s.hide)}>
        <img src="/images/rental_src.png" />
      </div>
    )
  }
  _renderFavs (showFavs, selectFav) {
    return (
      <div className={cx(s.favs, showFavs && s.show)}>
        <img src="/images/favorites_src.png" />
        <div 
          className={cx(s.favs__checkbox, selectFav && s.selected)}
          onClick={this._handleFavCheckBoxClick.bind(this)}>
          <div className={cx(s.favs__checkbox_checkmark, selectFav && s.show)} />
        </div>
      </div>
    )
  }

  _renderHeart (showFavs, selectFav) {
    return (
      <svg viewBox="0 0 34 30"
           xmlns="http://www.w3.org/2000/svg"
           className={s.heart}
           onClick={this._handleHeartClick.bind(this)} >
        <defs>
          <mask id="heart-fill">
            <path transform="translate(2,2)"
                  fill="#fff"
                  d="M27.5609547,2.44885436 C25.9869444,0.869245585 23.8944914,0 21.6684103,0 C19.4420125,0 17.349322,0.869245585 15.7747575,2.44885436 L14.9991123,3.2273781 L14.2234671,2.44885436 C12.6493776,0.869245585 10.5562122,5.64463659e-16 8.33028935,5.64463659e-16 C6.1044457,5.64463659e-16 4.01112195,0.869245585 2.43719075,2.44885436 C-0.812396916,5.71015385 -0.812396916,11.0164286 2.43719075,14.2764571 L14.0813684,25.9615423 C14.2717569,26.1533133 14.5087728,26.2707274 14.7563967,26.3159295 C14.8394393,26.3323738 14.9229569,26.3400002 15.0066329,26.3400002 C15.3360327,26.3400002 15.6659867,26.213927 15.9168562,25.9615423 L27.5610339,14.2764571 C30.8107799,11.0164286 30.8107799,5.71015385 27.5609547,2.44885436 Z"/>
          </mask>
        </defs>
        <rect
          x="0"
          y="100%"
          fill="#1775DE"
          width="100%"
          height="100%"
          mask="url(#heart-fill)"
          className={cx(selectFav && s.fill)} />
        <path
          className={cx(s.heart__path, showFavs && s.selected)}
          transform="translate(2,2)"
          d="M27.5609547,2.44885436 C25.9869444,0.869245585 23.8944914,0 21.6684103,0 C19.4420125,0 17.349322,0.869245585 15.7747575,2.44885436 L14.9991123,3.2273781 L14.2234671,2.44885436 C12.6493776,0.869245585 10.5562122,5.64463659e-16 8.33028935,5.64463659e-16 C6.1044457,5.64463659e-16 4.01112195,0.869245585 2.43719075,2.44885436 C-0.812396916,5.71015385 -0.812396916,11.0164286 2.43719075,14.2764571 L14.0813684,25.9615423 C14.2717569,26.1533133 14.5087728,26.2707274 14.7563967,26.3159295 C14.8394393,26.3323738 14.9229569,26.3400002 15.0066329,26.3400002 C15.3360327,26.3400002 15.6659867,26.213927 15.9168562,25.9615423 L27.5610339,14.2764571 C30.8107799,11.0164286 30.8107799,5.71015385 27.5609547,2.44885436 Z" />
      </svg>
    )
  }

  _handleFavCheckBoxClick (e) {
    e.preventDefault();

    this.setState({
      selectFav: true
    });
  }

  _handleHeartClick (e) {
    e.preventDefault();

    this.setState({ 
      showFavs: true
    });
  }


  render() {
    const { showFavs, selectFav } = this.state;

    return (
      <div className={s.container}>
        { this._renderRental(showFavs) }
        { this._renderFavs(showFavs, selectFav) }
        { this._renderHeart(showFavs, selectFav) }
      </div>
    );
  }
}

export default IndexPage;
