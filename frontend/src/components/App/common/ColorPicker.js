import React from 'react';
import reactCSS from 'reactcss';
import { SketchPicker } from 'react-color';

const ColorPicker = ({ hexColor }) => {
  const state = {
    displayColorPicker: false,
    color: {
      hexColor: hexColor,
    },
  };

  const handleClick = () => {
    this.setState({ displayColorPicker: !state.displayColorPicker });
  };

  const handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  const handleChange = (color) => {
    this.setState({ color: color.rgb });
  };

  const styles = reactCSS({
    default: {
      color: {
        width: '20px',
        height: '14px',
        borderRadius: '2px',
        background: `rgba(${state.color.r}, ${state.color.g}, ${state.color.b}, ${state.color.a})`,
      },
      swatch: {
        padding: '2px',
        background: '#fff',
        borderRadius: '1px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
        display: 'inline-block',
        cursor: 'pointer',
      },
      popover: {
        position: 'absolute',
        zIndex: '2',
      },
      cover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      },
    },
  });

  return (
    <div>
      <div style={styles.swatch} onClick={this.handleClick}>
        <div style={styles.color} />
      </div>
      {this.state.displayColorPicker ? (
        <div style={styles.popover}>
          <div style={styles.cover} onClick={this.handleClose} />
          <SketchPicker color={this.state.color} onChange={this.handleChange} />
        </div>
      ) : null}
    </div>
  );
};
export default ColorPicker;
