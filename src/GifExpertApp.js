import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GitGrid } from './components/GitGrid';

const GitExpertApp = () => {
      //const categories = ['One Punch','Samurai X','Dragon Ball','shingeki no kyojin' ];

      const [categories, setCategories] = useState(['Shingeki no Kyojin']);

      /* const handleAdd = () => {
            // setCategories([...categories, 'Naruto']);
            setCategories((cats) => [...cats, 'Naruto']);
      }; */

      //
      return (
            <>
                  <h2>GitExpertApp</h2>
                  <AddCategory setCategories={setCategories} />
                  <hr />

                  <ol>
                        {categories.map((category) => {
                              return (
                                    <GitGrid
                                          key={category}
                                          category={category}
                                    />
                              );
                        })}
                  </ol>
            </>
      );
};
export default GitExpertApp;
