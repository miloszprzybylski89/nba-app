import React from "react";
// eslint-disable-next-line no-unused-vars
import ReactDOM from "react-dom";

class ImgInBg extends React.Component {
    state = {
        loaded: false
    };

    render() {
        if (!this.state.loaded) {
            return (
                <>
                    <img
                        alt='someImage'
                        src={this.props.src}
                        style={{
                            display: "none",
                        }}
                        onLoad={() => {
                            this.setState({ loaded: true });
                        }}
                    />
                    {this.props.renderLoader ? this.props.renderLoader() : null}
                </>
            );
        }

        const style = {
            ...(this.props.style || {}),
            backgroundImage: `url(${this.props.src})`
        };

        return <div {...this.props} style={style} />;
    }
}

export default ImgInBg;
