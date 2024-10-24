export interface CompatibilityItem {
  icon: string;
  title: string;
  url: string;
}

export interface FeatureItem {
  description: string;
  icon: string;
  title: string;
}

export interface FooterLink {
  description: string;
  icon: string;
  url: string;
}

export interface NavItem {
  title: string;
  url: string;
}

/// Events Contenful

export interface EventImage {
  url: string;
}

export interface EventSys {
  id: string;
}

export interface Event {
  sys: EventSys;
  name: string;
  image: EventImage;
  date: string
}

export interface EventsCollection {
  items: Event[];
}

export interface EventsData {
  eventsCollection: EventsCollection;
}
