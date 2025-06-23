import {
  type RouteConfig,
  index,
  layout,
  route
} from '@react-router/dev/routes'

export default [
  layout('./routes/layout.tsx', [
    index('./routes/index.tsx'),
    route('/:targetId', './routes/[targetId].tsx')
  ])
] satisfies RouteConfig
