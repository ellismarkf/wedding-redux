import React, { Component } from 'react'
import {Motion, spring} from 'react-motion'
import { connect } from 'react-redux'
import { carouselIndexChange, carouselWidthChange } from '../actions/carousel'

const springSettings = {stiffness: 170, damping: 26}
const NEXT = 'NEXT'
const PREV = 'PREV'

class Carousel extends Component {
    handleChange({target: {value}}) {
        const { dispatch } = this.props
        dispatch(carouselIndexChange(value))
    }

    clickHandler(btn){
        // var photoIndex = btn === NEXT ? this.state.currPhoto+1 : this.state.currPhoto-1;

        // photoIndex = photoIndex >= 0 ? photoIndex : this.state.photos.length - 1;
        // photoIndex = photoIndex >= this.state.photos.length ? 0 : photoIndex;
        const { currPhoto, photos } = this.props
        let photoIndex = btn === NEXT ? currPhoto+1 : currPhoto-1;

        photoIndex = photoIndex >= 0 ? photoIndex : photos.length - 1;
        photoIndex = photoIndex >= photos.length ? 0 : photoIndex;

        dispatch(carouselIndexChange(photoIndex))

        dispatch(carouselIndexChange(photoIndex))
    }

    componentDidMount() {
        const width = this.refs.img.getDOMNode().offsetWidth
        dispatch(carouselWidthChange(width))
    }

    render() {
      const {photos, currPhoto, width} = this.props;
      const [currWidth, currHeight] = photos[currPhoto].dimensions;

      const widths = photos.map( (photo) => currHeight / photo.dimensions[0] * photo.dimensions[1]);

      const leftStartCoords = widths
        .slice(0, currPhoto)
        .reduce((sum, width) => sum - width, 0);

      let configs = [];
      photos.reduce((prevLeft, photo, i) => {
        configs.push({
            left: spring(prevLeft, springSettings),
            height: spring(currHeight, springSettings),
            width: spring(widths[i], springSettings),
        });
        return prevLeft + widths[i];
      }, leftStartCoords);

      return (
        <div>
          <div>Scroll Me</div>
          <button onClick={this.clickHandler.bind(null, '')}>Previous</button>
          <input
            type="range"
            min={0}
            max={photos.length - 1}
            value={currPhoto}
            onChange={this.handleChange} />
          <button onClick={this.clickHandler.bind(null, NEXT)}>Next</button>
          <div className="demo4">
            <Motion style={{height: spring(currHeight), width: spring(currWidth)}}>
              {container =>
                <div className="demo4-inner" style={container}>
                  {photos.map((photo, i) => {
                    const imgUrl = `../assets/${photo.name}.jpg`
                    console.log(imgUrl)
                    return (
                        <Motion key={i} style={configs[i]}>

                          {style => {
                            return (
                                <img className="demo4-photo" ref='img' src={require(imgUrl)} style={style} />
                            )
                          }

                          }
                        </Motion>
                    )
                    
                  }
                  )}
                </div>
              }
            </Motion>
          </div>
        </div>
      );
    }
}

const mapStateToProps = (state) => ({
    photos: state.carousel.photos,
    currPhoto: state.carousel.currPhoto,
    width: state.carousel.width
})

export default connect(mapStateToProps)(Carousel)