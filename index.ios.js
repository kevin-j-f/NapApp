import { AppRegistry } from 'react-native';
import Root from './app/Root';

AppRegistry.registerComponent('NapApp', () => Root);

//class NapApp extends Component {
    // constructor() {
    //     super();

    //     this.state = {
    //         countdown: null,
    //         timeLeft: 0
    //     };

    //     this.startTimer = this.startTimer.bind(this);
    //     this.getDisplayTime = this.getDisplayTime.bind(this);

    //     this.store = createNapAppStore(napAppReducer);
    // }
    // startTimer(minutes) {
    //     if(this.state.timeLeft !== 0){
    //         return;
    //     }

    //     this.setState({
    //         timeLeft: minutes * 60 * 1000
    //     }, () => {
    //         this.setState({
    //             countdown: setInterval(() => {
    //                 this.setState({
    //                     timeLeft: this.state.timeLeft - 1000
    //                 }, () => {
    //                     if(this.state.timeLeft === 0){
    //                         clearInterval(this.state.countdown);
    //                     }
    //                 });
    //             }, 1000)
    //         });
    //     });
    // }
    // getDisplayTime(){
    //     let { timeLeft } = this.state;
    //     timeLeft /= 1000;

    //     let hours = Math.floor(timeLeft / 3600);
    //     let minutes = Math.floor((timeLeft - (hours * 3600)) / 60);
    //     let seconds = timeLeft - (minutes * 60);

    //     return hours + 'h:' + minutes + 'm:' + seconds + 's';
    // }
        //let { timeLeft } = this.state;

        // return (
        //     <Provider store={ this.store }>
        //         <View style={styles.container}>
        //             <Text style={styles.welcome}>
        //                 { this.getDisplayTime() }
        //             </Text>
        //             <Button 
        //                 onPress={ () => this.startTimer(1) }
        //                 title="1 Minute" />
        //         </View>
        //     </Provider>
        // );
//     }
// }