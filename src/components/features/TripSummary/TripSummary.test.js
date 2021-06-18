import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {

  it('should generate correct link', () => {
    const expectedId = 'abc';
    const expectedLink = '/trip/abc';
    const expectedName = 'alt';
    const expectedCost = '100';
    const expectedDays = 7;
    const expectedTags = ['tag1', 'tag2', 'tag3'];

    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays} id={expectedId} tags={expectedTags}/>);

    expect(component.find('.link').prop('to')).toEqual(expectedLink);
  });

  it('should render correct src and alt', () => {
    const expectedId = 'abc';
    const expectedName = 'alt';
    const expectedCost = '100';
    const expectedDays = 7;
    const expectedTags = ['tag1', 'tag2', 'tag3'];
    const expectedImage = 'image.jpg';

    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays} id={expectedId} tags={expectedTags} image={expectedImage}/>);

    expect(component.find('img').prop('src')).toEqual(expectedImage);
    expect(component.find('img').prop('alt')).toEqual(expectedName);

  });

  it('should render correct name, cost, days', () => {
    const expectedId = 'abc';
    const expectedName = 'alt';
    const expectedCost = '100';
    const expectedDays = 7;
    const expectedTags = ['tag1', 'tag2', 'tag3'];


    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays} id={expectedId} tags={expectedTags}/>);

    const renderedName = component.find('.title').text();
    expect(renderedName).toEqual(expectedName);

    const renderedDaysAndCost = component.find('.details').text();
    expect(renderedDaysAndCost).toEqual(`${expectedDays} daysfrom ${expectedCost}`);

  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render tags', () => {
    const expectedId = 'abc';
    const expectedName = 'alt';
    const expectedCost = '100';
    const expectedDays = 7;
    const expectedTags = ['tag1', 'tag2', 'tag3'];

    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays} id={expectedId} tags={expectedTags}/>);

    expect(component.find('.tags span').at(0).text()).toEqual(expectedTags[0]);
    expect(component.find('.tags span').at(1).text()).toEqual(expectedTags[1]);
    expect(component.find('.tags span').at(2).text()).toEqual(expectedTags[2]);

  });

  it('should not render div tags if props tag is false', () => {
    const expectedId = 'abc';
    const expectedName = 'alt';
    const expectedCost = '100';
    const expectedDays = 7;
    const expectedTags = ['tag1', 'tag2', 'tag3'];

    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays} id={expectedId} tags={expectedTags}/>);

    expect(component.hasClass('tags')).toBe(false);

  });

});
