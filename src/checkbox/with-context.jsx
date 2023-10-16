import React from 'react';
import PropTypes from 'prop-types';

export default function withContext(Checkbox) {
    return class WrappedComp extends React.Component {
        static displayName = 'Checkbox';
        static contextTypes = {
            onChange: PropTypes.func,
            __group__: PropTypes.bool,
            selectedValue: PropTypes.array,
            disabled: PropTypes.bool,
            prefix: PropTypes.string,
        };

        constructor(props) {
            super(props);
            this.checkboxRef = null;
        }

        focus() {
            if (this.checkboxRef) {
                this.checkboxRef.focus();
            }
        }

        render() {
            return (
                <Checkbox
                    {...this.props}
                    context={this.context}
                    ref={el => {
                        this.checkboxRef = el;
                    }}
                />
            );
        }
    };
}
