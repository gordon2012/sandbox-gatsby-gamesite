import React, { Component } from 'react';
import { Flex, Box, Image } from '@rebass/emotion';
import { css } from '@emotion/core';

class Carousel extends Component {
  state = {
    images: [],
    active: 0,
  };

  static getDerivedStateFromProps({ images }) {
    return { images };
  }

  handleIndexClick = event => {
    this.setState({
      active: +event.target.dataset.i,
    });
  };

  render() {
    const { images, active } = this.state;

    const style = {
      image: css`
        max-height: 100px;
        border: 1px solid transparent;
      `,
      active: css`
        opacity: 0.5;
        border: 1px solid white;
      `,
    };

    const { images: __, ...props } = this.props;
    return (
      <Box {...props}>
        <Image src={images[active]} />
        <Flex justifyContent="center">
          {images.map((img, i) => (
            <Box key={i} p={1} className="text-center">
              <Image
                src={img}
                xp={1}
                css={css`
                  ${style.image};
                  ${i === active ? style.active : ''}
                `}
                data-i={i}
                onClick={this.handleIndexClick}
              />
            </Box>
          ))}
        </Flex>
      </Box>
    );
  }
}

export default Carousel;
