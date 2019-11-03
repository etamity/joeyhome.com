import { postListingFragment } from './fragments';

const PostListingQuery = `query PostsUnderTag($tag: String, $limit: Int = 3) {
  allMdx(sort: {order: DESC, fields: [frontmatter___date]}, limit: $limit, filter: {frontmatter: {tags: {in: [$tag]}}}) {
    edges {
      node {
        ...postListingFields
      }
    }
  }
}
`;

export { PostListingQuery };
