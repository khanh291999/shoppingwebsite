import React, { Component } from 'react'
import { Container, Grid, Box } from '@material-ui/core'
import '../../assets/ImageContainer.css'

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
                    <Grid container spacing={3} style={{marginLeft: "60px"}}>
                        <Grid item xs={12}>
                            <img className='img-items-big-img' src={(typeof this.state.items) !== 'string' ? this.state.items[this.state.selected] : this.state.items}></img>
                        </Grid>
                        {(typeof this.state.items) !== 'string' && 
                        <Grid item xs={4} md={12} className="small-img-container-container" style={{maxWidth: "450px"}}>   
                            {this.state.items.map((item,index)=>{
                                return <Grid className="small-img-container" onClick={()=>{this.handleSelect(index)}}>
                                    <img className='img-items-small-img' key={index} src={item}></img>
                                </Grid>
                            })}        
                        </Grid>}
                    </Grid>
                </Container>
            </>
        )
    }
}
