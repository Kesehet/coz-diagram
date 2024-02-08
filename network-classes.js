class Canvas {
  constructor(divId) {
      this.divId = divId; // The ID of the DIV element where the diagram will be rendered
      this.graph = new joint.dia.Graph; // The graph model storing elements and links
      this.paper = new joint.dia.Paper({ // The paper is the visual representation of the graph model
          el: document.getElementById(divId),
          model: this.graph,
          width: 800, // Adjust size as needed
          height: 600,
          gridSize: 1,
          background: {
              color: 'rgba(0, 0, 0, 1)' // Optional: to visualize the canvas area, you can set a background color
          }
      });
  }

  // Example method to add a simple rectangle element to the graph
  addRectangle() {
    const rect = new joint.shapes.standard.Rectangle();
    rect.position(100, 30);
    rect.resize(100, 60); // Increase the height to accommodate the image and text
    rect.attr({
        body: {
            fill: 'blue'
        },
        label: {
            text: 'Your Text Here',
            fill: 'white',
            textVerticalAnchor: 'middle', // Vertically center the text
            textAnchor: 'middle', // Horizontally center the text
            refX: '50%', // Position the text at 50% of the element's width
            refY: '50%' // Position the text at 50% of the element's height
        },
        image: {
            'xlink:href': 'https://static-00.iconduck.com/assets.00/server-icon-512x512-06jrsmox.png', // URL to the image
            width: 48, // Width of the image
            height: 48, // Height of the image
            refX: '50%', // Center the image horizontally
            refX2: -24, // Offset by half the image's width to truly center
            refY: '30%', // Adjust this to position the image appropriately
        }
    });
    rect.addTo(this.graph);
}


  // Similar methods can be added to create different types of elements and links
}
