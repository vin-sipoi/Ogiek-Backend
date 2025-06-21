import type { Schema, Struct } from '@strapi/strapi';

export interface AboutSectionDetail extends Struct.ComponentSchema {
  collectionName: 'components_about_section_details';
  info: {
    displayName: 'detail';
  };
  attributes: {
    title: Schema.Attribute.String;
    value: Schema.Attribute.Text;
  };
}

export interface ArtContentArticleContent extends Struct.ComponentSchema {
  collectionName: 'components_art_content_article_contents';
  info: {
    displayName: 'ArticleContent';
  };
  attributes: {
    src: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.Text;
    type: Schema.Attribute.Enumeration<['paragraph', 'image']>;
  };
}

export interface CaseAccordionPoints extends Struct.ComponentSchema {
  collectionName: 'components_case_accordion_points';
  info: {
    description: '';
    displayName: 'points';
  };
  attributes: {
    subpoints: Schema.Attribute.Component<'subpoint.subpoints', true>;
    text: Schema.Attribute.Text;
  };
}

export interface CoreValueValues extends Struct.ComponentSchema {
  collectionName: 'components_core_value_values';
  info: {
    description: '';
    displayName: 'values';
  };
  attributes: {
    color: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface JourneyJourneyDescription extends Struct.ComponentSchema {
  collectionName: 'components_journey_journey_descriptions';
  info: {
    displayName: 'journey-description';
  };
  attributes: {
    text: Schema.Attribute.Text;
  };
}

export interface MainDepartmentMainDepartment extends Struct.ComponentSchema {
  collectionName: 'components_main_department_main_departments';
  info: {
    displayName: 'main_department';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'>;
    sub_department: Schema.Attribute.Component<
      'sud-department.sub-department-component',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface ObjObjective extends Struct.ComponentSchema {
  collectionName: 'components_obj_objectives';
  info: {
    displayName: 'objective';
  };
  attributes: {
    text: Schema.Attribute.Text;
  };
}

export interface ParaParagraphs extends Struct.ComponentSchema {
  collectionName: 'components_para_paragraphs';
  info: {
    description: '';
    displayName: 'paragraphs';
  };
  attributes: {
    text: Schema.Attribute.Text;
  };
}

export interface SubpointSubpoints extends Struct.ComponentSchema {
  collectionName: 'components_subpoint_subpoints';
  info: {
    displayName: 'subpoints';
  };
  attributes: {
    text: Schema.Attribute.Text;
  };
}

export interface SudDepartmentDetails extends Struct.ComponentSchema {
  collectionName: 'components_sud_department_details';
  info: {
    displayName: 'details';
  };
  attributes: {
    sub: Schema.Attribute.Component<
      'sud-department.sub-department-component',
      true
    >;
  };
}

export interface SudDepartmentSubDepartmentComponent
  extends Struct.ComponentSchema {
  collectionName: 'components_sud_department_sub_department_components';
  info: {
    displayName: 'sub_department_component';
  };
  attributes: {
    text: Schema.Attribute.Text;
  };
}

export interface VinVinComponent extends Struct.ComponentSchema {
  collectionName: 'components_vin_vin_components';
  info: {
    displayName: 'vin-component';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about-section.detail': AboutSectionDetail;
      'art-content.article-content': ArtContentArticleContent;
      'case-accordion.points': CaseAccordionPoints;
      'core-value.values': CoreValueValues;
      'journey.journey-description': JourneyJourneyDescription;
      'main-department.main-department': MainDepartmentMainDepartment;
      'obj.objective': ObjObjective;
      'para.paragraphs': ParaParagraphs;
      'subpoint.subpoints': SubpointSubpoints;
      'sud-department.details': SudDepartmentDetails;
      'sud-department.sub-department-component': SudDepartmentSubDepartmentComponent;
      'vin.vin-component': VinVinComponent;
    }
  }
}
