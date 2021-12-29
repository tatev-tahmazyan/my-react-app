import MessageDynamic from "../testComponents/MessageDynamic";
import MessageModule from "../testComponents/MessageModule";
import { messages } from '../helpers/lesson3test/mockData.js';
import CoffeIcon from "../Icons/Coffee";
import SunIcon from "../Icons/Sun";
import Message from '../testComponents/MessageInline';

const TestMain = () => {

    return (
        <div className="main-test">
            <h1>Main Test Component</h1>
            {/* <Message /> */}
            <MessageDynamic
                isMessage={true}
                messageData={messages[0]}
                styleType="aqua"
            />
            <MessageDynamic
                messageData={messages[1]}
                styleType="dark"
            />
            <MessageDynamic
                messageData={messages[2]}
                styleType="light"
            />
            <CoffeIcon />
            <SunIcon />

            <MessageModule
                messageData={messages[2]}
            />
        </div>
    );
}
export default TestMain;