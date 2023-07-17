export type HeroIcon = React.ComponentType<
  React.PropsWithoutRef<React.ComponentProps<"svg">> & {
    title?: string | undefined;
    titleId?: string | undefined;
  }
>;