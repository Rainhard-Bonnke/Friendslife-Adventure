-- Reset destination image URLs to use placeholder
-- The actual images will be handled via React imports in the components

UPDATE destinations 
SET image_url = 'placeholder'
WHERE image_url LIKE '/src/assets/%';