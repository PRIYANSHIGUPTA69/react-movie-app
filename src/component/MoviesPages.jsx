import React, { Component } from 'react'
import { getMovies } from '../temp/movies'

export default class MoviesPages extends Component {
    state = {
        movies: getMovies(),
        currSearchText:"",
       // filteredMovies:getMovies()
    }
    deleteEntery = (id) => {
        let filterMovies = this.state.movies.filter((movie) => {
            return movie._id != id;
        })
        this.setState({
            movies: filterMovies
        })
    }
    handleInputValue = (e) => {
        let currVal = e.target.value;
      
       this.setState({
           currSearchText:currVal,
           //filteredMovies:filteredArr
       })
    }
    /* sortArray = (type) => {
        const types = {
          title: 'title',
          stock: 'numberInStock',
          rate: 'dailyRentalRate',
        };
        let sortProperty = types[type];
        const sorted = this.state.filteredMovies.sort((a, b) => b.sortProperty > a.sortProperty);
        console.log(sorted);
       
      };*/
    render() {
        let filteredArr = this.state.movies.filter((movie)=>{
            let title = movie.title.trim().toLowerCase();
            return title.includes(this.state.currSearchText)
        })
        if(this.state.currSearchText == ""){
            filteredArr = this.state.movies
        }
        return (
            <div style={{ display: "flex" }} className="row">
                <div className="movie-type col-3">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="col">acction</th>
                            </tr>
                            <tr>
                                <th scope="col">thriller</th>
                            </tr>
                            <tr>
                                <th scope="col">comedy</th>
                            </tr>
                        </tbody>
                    </table></div>
                <div className="table-container col-9">
                    <input type="search" className="movie-detail" value={this.state.currSearchText} onChange={this.handleInputValue} />
                    <table className="table" /*onClick={() => {this.sortArray("title")}}*/>
                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Genre</th>
                                <th scope="col">numberInStock</th>
                                <th scope="col">Ratings</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>

                            {filteredArr.map((movie) => {
                                return (
                                    <tr key={movie._id}>
                                        <th scope="col">{movie.title}</th>
                                        <th scope="col">{movie.genre.name}</th>
                                        <th scope="col">{movie.numberInStock}</th>
                                        <th scope="col">{movie.dailyRentalRate}</th>
                                        <th scope="col"><button type="button" onClick={() => { this.deleteEntery(movie._id) }} className="btn btn-danger">Delete</button></th>
                                    </tr>

                                )
                            })}

                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}