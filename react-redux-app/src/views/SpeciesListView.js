import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSpecies } from '../actions';
import { SpeciesList  } from '../components';
import '../styles/species-list-view.css';

function SpeciesListView(props) {
  useEffect(() => {
    props.fetchSpecies();
  }, []);

  return (
    <div>
      {props.error && <p>Error: {props.error}</p>}
      {props.isLoading ? (
        <div className="donut" />
      ) : (
        <SpeciesList species={props.species} />
      )};
    </div>
  );
};

function mapStateToProps(state) {
  return {
    species: state.speciesReducer.species,
    fetchSpecies: state.speciesReducer.fetchSpecies,
    error: state.speciesReducer.error
  };
};

function mapDispatchToProps(state) {
  return {
    fetchSpecies: state.speciesReducer.fetchSpecies
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpeciesListView);