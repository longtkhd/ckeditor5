/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

 'use strict';

const gulp = require( 'gulp' );
const path = require( 'path' );
const replace = require( 'gulp-replace' );
const gitignore = require( '../utils/gitignore-filter' );

/**
 * {String} workdir
 */
module.exports = ( workdir ) => {
	// Change to correct year
	const year = '2017';
	const licenseRegexp = /(@license Copyright \(c\) 2003-)[0-9]{4}/g;
	const glob = path.join( workdir, '**/*' );

	return gulp.src( glob )
		.pipe( gitignore() )
		.pipe( replace(
			licenseRegexp,
			`$1${ year }`,
			{ skipBinary: true }
		) )
		.pipe( gulp.dest( workdir ) );
};
