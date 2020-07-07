/*
  Documentation Navigation
  Notes: 
*/

import React from 'react';
import APINavItems from '../../components/api-nav-items';

export default function APINav() {

  return (
    <>
      <APINavItems
        navItems={[
            {
              text: 'Getting Started',
              section: true
            },
            {
              path: '/api/introduction',
              text: 'Introduction'
            },
            {
                path: '/api/setup',
                text: 'Setup'
            },
            
            {
              path: '/api/changelog',
              text: 'Changelog',
              section: true
            },
            {
                path: '/api/support',
                text: 'Support',
                section: true
            }
        ]}
      />
    </>
  )
}


