import { gql } from '@apollo/client';

const PRIMARY_MENU_QUERY = gql`
  query {
    menu(id: "primary", idType: NAME) {
      menuItems {
        nodes {
          label
          path
          id
          cssClasses
        }
      }
    }
  }
`;


export { PRIMARY_MENU_QUERY };
