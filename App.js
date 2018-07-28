import React, {Component} from 'react';
import { StyleSheet, Text, View, Animated,TouchableHighlight, Button} from 'react-native';
import X from './X';
import O from './O';
export default class App extends Component {

  constructor(props){
    super(props);
    this.state={
      w: new Animated.Value(390),
      h: new Animated.Value(90),
      color: '#EEE',
      colorNext: '#CCC',
      title: 'Prox.:',
      opacityX:1,
      opacityO:1,
      status: 1,
      next: 'x',
      a1:'',
      a2:'',
      a3:'',
      b1:'',
      b2:'',
      b3:'',
      c1:'',
      c2:'',
      c3:'',
    };
  
    
    this.click = this.click.bind(this);
    this.reset = this.reset.bind(this);
    this.check = this.check.bind(this);
    
  
  }
  
  click(where){
    let state = this.state;

    if( eval('state.'+where) == '' && state.status == 1)
       eval('state.'+where+' = state.next');

     if( state.next == 'x' && state.status == 1){
        state.next = 'o';
     }else if( state.next == 'o'  && state.status == 1){
        state.next = 'x';
     }
     
     this.setState(state);

     this.check( 'x' );
     this.check(  'o' );
  }

  check(i){
      let s = this.state;
      
      

     if( s.a1 == i && s.b1 == i && s.c1 == i  ||  s.a2 == i && s.b2 == i && s.c2 == i ||
         s.a3 == i && s.b3 == i && s.c3 == i  ||  s.a1 == i && s.a2 == i && s.a3 == i ||
         s.b1 == i && s.b2 == i && s.b3 == i  ||  s.c1 == i && s.c2 == i && s.c3 == i ||
         s.a1 == i && s.b2 == i && s.c3 == i  ||  s.a3 == i && s.b2 == i && s.c1 == i ){
        
        
        s.title = 'GANHOU';
        s.next = i;
      
       
      if( i == 'x'){
        s.opacityO = 0.1;
        s.color = '#000';
      }
      else{
        s.opacityX = 0.1;
        s.color = 'red';
      }
      Animated.timing(
        this.state.w,{toValue:95,duration:2000}).start();
        
        s.colorNext = "orange";
        s.status = 0;
        this.setState(s);
      }
     
  }

  reset()
  {
      let state = this.state;
      state.next = 'x';
      
      Animated.timing(
        this.state.w,{toValue:390,duration:2000}).start();
      state.color = '#EEE';
      state.colorNext = '#CCC';
      state.status = 1;
      state.opacityO = 1;
      state.opacityX = 1;
      state.title = 'Prox.:';
      state.a1 = ''; state.a2 = ''; state.a3 = '';
      state.b1 = ''; state.b2 = ''; state.b3 = '';
      state.c1 = ''; state.c2 = ''; state.c3 = '';
      this.setState(state);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.area}>
                {/*  LINNE  */}
                <View style={[styles.line_vertical, {borderLeftWidth:0}]}>
                     
                        {/*//COLUMM*/}
                        <TouchableHighlight  underlayColor='#EEE' onPress={()=>{this.click('a1')}} style={[styles.line_horizontal, {borderTopWidth:0}]}>
                          <View >
                           <Animated.View style={{opacity:this.state.opacityX}}>
                              {this.state.a1 == 'x' && <X />}
                              </Animated.View> 
                           
                            <Animated.View style={{opacity:this.state.opacityO}}>
                              {this.state.a1 == 'o' && <O />}
                              </Animated.View> 
                           
                           </View>
                        </TouchableHighlight>
                        
                        <TouchableHighlight underlayColor='#EEE' onPress={()=>{this.click('a2')}} style={styles.line_horizontal}>
                           <View>
                            <Animated.View style={{opacity:this.state.opacityX}}>
                            {this.state.a2 == 'x' && <X />}
                            </Animated.View> 

                             <Animated.View style={{opacity:this.state.opacityO}}>
                            {this.state.a2 == 'o' && <O />}
                            </Animated.View> 
                           </View>
                        </TouchableHighlight>

                        <TouchableHighlight underlayColor='#EEE' onPress={()=>{this.click('a3')}} style={styles.line_horizontal}>
                          <View>
                           <Animated.View style={{opacity:this.state.opacityX}}>
                             {this.state.a3 == 'x' && <X />}
                            </Animated.View> 
                             <Animated.View style={{opacity:this.state.opacityO}}>
                              {this.state.a3 == 'o' && <O />}
                            </Animated.View> 
                           </View>
                        </TouchableHighlight>

                      
                </View>

                {/*  LINNE  */}          
                <View style={styles.line_vertical}>

                      {/*  COLUMN  */}
                      <TouchableHighlight underlayColor='#EEE' onPress={()=>{this.click('b1')}} style={[styles.line_horizontal, {borderTopWidth:0}]}>
                         <View>
                          <Animated.View style={{opacity:this.state.opacityX}}>
                            {this.state.b1 == 'x' && <X />}
                            </Animated.View> 
                             <Animated.View style={{opacity:this.state.opacityO}}>
                            {this.state.b1 == 'o' && <O />}
                            </Animated.View> 
                          </View>
                      </TouchableHighlight>
                      <TouchableHighlight underlayColor='#EEE' onPress={()=>{this.click('b2')}}  style={styles.line_horizontal}>
                          <View>
                           <Animated.View style={{opacity:this.state.opacityX}}>
                            {this.state.b2 == 'x' && <X />}
                            </Animated.View> 
                             <Animated.View style={{opacity:this.state.opacityO}}>
                            {this.state.b2 == 'o' && <O />}
                            </Animated.View> 
                          </View>
                      </TouchableHighlight>
                      <TouchableHighlight underlayColor='#EEE' onPress={()=>{this.click('b3')}}   style={styles.line_horizontal}>
                          <View>
                           <Animated.View style={{opacity:this.state.opacityX}}>
                            {this.state.b3 == 'x' && <X />}
                            </Animated.View> 
                             <Animated.View style={{opacity:this.state.opacityO}}>
                            {this.state.b3 == 'o' && <O />}
                            </Animated.View> 
                          </View>
                      </TouchableHighlight>

                   
                </View>
      
                {/*  LINNE  */}          
                <View style={styles.line_vertical}>
                      
                  {/*  COLUMN  */}
                      <TouchableHighlight underlayColor='#EEE' onPress={()=>{this.click('c1')}} style={[styles.line_horizontal, {borderTopWidth:0}]}>
                          <View>
                           <Animated.View style={{opacity:this.state.opacityX}}>
                            {this.state.c1 == 'x' && <X />}
                            </Animated.View> 
                             <Animated.View style={{opacity:this.state.opacityO}}>
                            {this.state.c1 == 'o' && <O />}
                            </Animated.View> 
                          </View>
                       </TouchableHighlight>
                      <TouchableHighlight underlayColor='#EEE' onPress={()=>{this.click('c2')}} style={styles.line_horizontal}>
                          <View>
                           <Animated.View style={{opacity:this.state.opacityX}}>
                            {this.state.c2 == 'x' && <X />}
                            </Animated.View> 
                             <Animated.View style={{opacity:this.state.opacityO}}>
                            {this.state.c2 == 'o' && <O />}
                            </Animated.View> 
                          </View>
                      </TouchableHighlight>
                      <TouchableHighlight underlayColor='#EEE' onPress={()=>{this.click('c3')}} style={styles.line_horizontal}>
                          <View>
                           <Animated.View style={{opacity:this.state.opacityX}}>
                            {this.state.c3 == 'x' && <X />}
                            </Animated.View> 
                             <Animated.View style={{opacity:this.state.opacityO}}>
                            {this.state.c3 == 'o' && <O />}
                            </Animated.View> 
                          </View>
                      </TouchableHighlight>

                      
                </View>
        </View>

        <View style={styles.infos}>
            <Animated.View style={[styles.next_play,{ backgroundColor:this.state.colorNext, width:this.state.w, height:this.state.h}]}>
                <Text> {this.state.title} </Text>
                  {this.state.next == 'x' && <X />}
                  {this.state.next == 'o' && <O />}
            </Animated.View>
        </View>
        <View>
          <Button title='Reset' onPress={this.reset} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  area:{
    width:300,
    height:300,
    backgroundColor: 'transparent',
    flexDirection: 'row'
  },
  line_vertical:{
    flex: 1,
    borderLeftWidth:5,
    borderLeftColor: '#000'
  },
  line_horizontal:{
    flex: 1,
    borderTopWidth: 5,
    borderTopColor: '#000',
    justifyContent: 'center',
    alignItems: 'center'
  },
  infos:{
    marginTop:30,
    flexDirection: 'row',

  },
  next_play:{
    paddingTop:5,
    width:90,
    height:90,
    justifyContent: 'center',
    alignItems: 'center'
  },
  who_win:{
    flex:1, 
    fontWeight: 'bold',
    color: "#FFF",
    fontSize:20,
    paddingTop:25,
    justifyContent: 'center',
    alignItems: 'center',
    
    }
});
























