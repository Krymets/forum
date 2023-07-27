import {Component} from "react";
import './menu.css';
import {MenuDivider} from "./divider/divider";



class AppMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: null
        };
    }

    onMenuItemClick = (index) => {
        this.setState({ activeIndex: index });
    };

    renderMenuItem = (text, index) => {
        const { activeIndex } = this.state;
        const isActive = activeIndex === index;
        const classNames = `Frame19${isActive ? '-active' : ''}`;
        const textNames = `menu-text${isActive ? '-active' : ''}`;

        return (
            <div className={classNames} key={index} onClick={() => this.onMenuItemClick(index)}>
                <div className={textNames}>{text}</div>
            </div>
        );
    };

    render() {
        const menuItems = [
            'Головна',
            'Виноробство',
            'Сироварня',
            'Упакування',
            'Доставка',
            'Роздрібна торгівля',
            'Інше'
        ];

        return (
            <div>
                <div className="Frame18">
                    <div className="Frame3">
                        <div className="Frame24">{menuItems.map(this.renderMenuItem)}</div>
                    </div>
                </div>
                <MenuDivider />
            </div>
        );
    }
}

export default AppMenu;

