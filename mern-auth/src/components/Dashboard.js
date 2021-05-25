import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Dashboard = ({ auth: { user } }) => {
	return (
		<div style={{ marginTop: "5rem", textAlign: "center" }}>
			<h1>Welcome, {user && user.name}</h1>
		</div>
	);
};
Dashboard.propTypes = {
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps)(Dashboard);
