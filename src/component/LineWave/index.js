import React, { Component } from 'react';
import './index.less';

export default class LineWave extends Component {
  state = {
    xs: [],
    t: 0,
    animationId: null
  }
  componentDidMount(){
    let points = [];
    for (let i = 0; i <= 1920; i++) {
      points.push(i)
    }
    this.setState({
      xs: points
    })
    this.lineAnimate();
  }

  componentWillUnmount() {
    const { animationId } = this.state;
    cancelAnimationFrame(animationId);
  }

  lineAnimate = () => {
    let animationId = null;
    const  { xs, t } = this.state;
    const { length = 30, amplitute = 45, speed = 1, id } = this.props;

    let points = xs.map( x => {
      let y = 100 + amplitute * Math.sin( (x + t) / length )

      return [x, y]
    })

    let path = 'M' + points.map( p => {
      return p[0] + ',' + p[1]
    }).join(' L')

    if (points.length && document.querySelector(`#${id} path`)) {
      document.querySelector(`#${id} path`).setAttribute('d', path);
    }
    // points.length && document.querySelector(`#${id} path`).setAttribute('d', path)

    this.setState({t: t + speed});

    animationId = requestAnimationFrame(this.lineAnimate);
    this.setState({ animationId });
  }
  render() {
    const { id } = this.props;
    return <svg id={id} className="line-wave"><path></path></svg>
  }
};
