import React from 'react';
import { useState } from 'react';

import FolderIcon from '@mui/icons-material/Folder';
import QueueIcon from '@mui/icons-material/Queue';

import { List, Typography, Grid, Box } from '@mui/material';
import { Link } from '@reach/router';

const Node = ({ data: node, level, isOpen: isNodeOpen }) => {
  const indentation = level * 4;
  const [isOpen, setIsOpen] = useState(true);
  const hasChildren = (node) => !!(node.nodes && node.nodes.length);

  return (
    <>
      {isNodeOpen && (
        <>
          {node.title && (
            <Grid
              container
              sx={{ pt: 1, pl: indentation, cursor: 'pointer' }}
              onClick={() => setIsOpen(!isOpen)}>
              <Box sx={{ mt: 0.5 }}>
                {node.nodes ? <FolderIcon /> : <QueueIcon />}
              </Box>

              <Typography variant="h6" sx={{ ml: 1 }}>
                {node.linkable ? (
                  <Link to={`/queue/:${node.title}`}>{node.title}</Link>
                ) : (
                  <>{node.title}</>
                )}
              </Typography>
            </Grid>
          )}
          {hasChildren(node) && isOpen && (
            <List sx={{ pl: 0 }}>
              {hasChildren(node) &&
                node.nodes?.map((child) => (
                  <Node data={child} level={level + 1} isOpen={isOpen} />
                ))}
            </List>
          )}
        </>
      )}
    </>
  );
};

export const Tree = ({ data: tree, onClick }) => {
  return (
    <Box
      role="presentation"
      onClick={onClick()}
      onKeyDown={onClick()}
      sx={{ mx: 3, minWidth: 250 }}>
      <Node data={tree} level={0} isOpen={true} />
    </Box>
  );
};
