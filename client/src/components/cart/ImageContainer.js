import React, { Component } from 'react'
import { Container, Grid, Box } from '@material-ui/core'

export default class ImageContainer extends Component {
    state={
        items:[
        ],
        selected:0,
    }
    componentDidMount(){
        this.setState({
            items:this.props.items
        })
    }
    handleSelect(index){
        this.setState({
            selected:index
        })
    }
    render() {
        return (
            <>
                <Container>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <img style={{ maxWidth: "100%", maxHeight: "100%" }}  className='img-items big_img' src={(typeof this.state.items) !== 'string' ? this.state.items[this.state.selected] : this.state.items}></img>
                        </Grid>
                        {(typeof this.state.items) !== 'string' && 
                        <Grid item xs={4} md={12} style={{ display: "flex", width: "100%" }} >   
                            {this.state.items.map((item,index)=>{
                                return <Grid style={{ padding:"12px" }}onClick={()=>{this.handleSelect(index)}}>
                                    <img style={{ maxWidth: "100%", maxHeight: "100%" }} className='img-items small_img' key={index} src={item}></img>
                                </Grid>
                            })}        
                        </Grid>}
                    </Grid>
                </Container>
            </>
        )
    }
}
